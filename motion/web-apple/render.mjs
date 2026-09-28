// node render.mjs --fps 30 --sub 2            → out/silent.mp4
// node render.mjs --contact                     → out/contact.png (one frame per beat)
// node render.mjs --stills 4.2,4.3,4.4          → out/stills.png (strip around a moment)
// Deps live outside Google Drive (~/.cache/ino-motion) so node_modules never syncs.
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readFile } from 'node:fs';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(path.join(process.env.HOME, '.cache/ino-motion/package.json'));
const { chromium } = require('playwright');
const FFMPEG = require('ffmpeg-static');
const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'out');

const argv = process.argv;
const arg = (k, d) => { const i = argv.indexOf('--' + k); return i > 0 ? argv[i + 1] : d; };
const FPS = Number(arg('fps', 30)), SUB = Number(arg('sub', 2)), DUR = Number(arg('dur', 15));
mkdirSync(OUT, { recursive: true });

const run = (args) => new Promise((res, rej) => {
  const p = spawn(FFMPEG, ['-loglevel', 'error', ...args], { stdio: ['ignore', 'ignore', 'inherit'] });
  p.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c)));
});

// Serve over http (file:// taints the canvas, which blocks getImageData)
const TYPES = { '.html': 'text/html', '.png': 'image/png', '.js': 'text/javascript', '.json': 'application/json' };
const server = http.createServer((q, r) => readFile(path.join(DIR, decodeURIComponent(q.url.split('?')[0])), (e, b) => {
  if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': TYPES[path.extname(q.url)] || 'application/octet-stream' }); r.end(b);
})).listen(0);
const PORT = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('pageerror', e => console.error('PAGE ERROR', e.message));
await page.goto(`http://127.0.0.1:${PORT}/index.html`);
await page.evaluate(() => window.ready);
const canvas = page.locator('#c');
await page.addStyleTag({ content: 'canvas{height:1080px!important;width:1920px!important;margin:0!important}' });

async function frame(t, type = 'jpeg') {
  await page.evaluate((t) => window.seek(t), t);
  return canvas.screenshot(type === 'png' ? { type } : { type, quality: 95 });
}

async function sheet(times, name, cols) {
  const tmp = path.join(OUT, '_sheet'); rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp);
  for (let i = 0; i < times.length; i++) writeFileSync(path.join(tmp, `f${String(i).padStart(3, '0')}.png`), await frame(times[i], 'png'));
  const rows = Math.ceil(times.length / cols);
  await run(['-y', '-i', path.join(tmp, 'f%03d.png'), '-vf', `scale=320:-1,tile=${cols}x${rows}:padding=6:color=white`, '-frames:v', '1', '-update', '1', path.join(OUT, name)]);
  rmSync(tmp, { recursive: true, force: true });
  console.log('wrote out/' + name);
}

if (argv.includes('--contact')) {
  const times = []; for (let t = 0.45; t < DUR; t += 0.5) times.push(Math.round(t * 100) / 100);
  await sheet(times, 'contact.png', 6);
} else if (argv.includes('--stills')) {
  await sheet(arg('stills').split(',').map(Number), 'stills.png', 6);
} else {
  const vf = SUB > 1 ? `tmix=frames=${SUB},select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB` : 'null';
  const ff = spawn(FFMPEG, ['-loglevel', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS * SUB), '-i', '-',
    '-vf', vf, '-r', String(FPS), '-c:v', 'libx264', '-crf', '16', '-preset', 'medium', '-pix_fmt', 'yuv420p', path.join(OUT, 'silent.mp4')],
    { stdio: ['pipe', 'ignore', 'inherit'] });
  const total = Math.round(DUR * FPS * SUB), t0 = Date.now();
  for (let i = 0; i < total; i++) {
    const img = await frame(i / (FPS * SUB));
    if (!ff.stdin.write(img)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % (FPS * SUB) === 0) console.log(`rendered ${i / (FPS * SUB)}s / ${DUR}s  (${((Date.now() - t0) / 1000).toFixed(0)}s elapsed)`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log('wrote out/silent.mp4');
}
await browser.close();
server.close();
