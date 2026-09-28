// node audio.mjs → out/audio.wav   Quiet ambient bed for the 20s loop; soft chimes land on each scene dissolve.
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = path.dirname(fileURLToPath(import.meta.url));
const SR = 48000, DUR = 20, N = DUR * SR, mix = new Float32Array(N);
const hz = m => 440 * 2 ** ((m - 69) / 12);
let seed = 3; const noise = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2147483648 - 1;
const add = (t0, len, fn) => { const s = Math.floor(t0 * SR); for (let i = 0; i < len * SR; i++) { const j = (s + i) % N; mix[j] += fn(i / SR); } }; // wraps → seamless loop

// pad: Dmaj9 → Bm11 → Gmaj7#11 → Aadd9, 5s each, long crossfading swells
const PADS = [[50, 57, 61, 64, 66], [47, 54, 57, 62, 64], [43, 50, 54, 59, 61], [45, 52, 57, 59, 64]];
PADS.forEach((ch, k) => ch.forEach((m, j) => add(k * 5, 6.2, t => {
  const env = Math.sin(Math.PI * Math.min(1, t / 6.2)) ** 1.5;
  return 0.022 * env * (Math.sin(2 * Math.PI * hz(m) * t + j) + 0.18 * Math.sin(2 * Math.PI * hz(m + 12) * 1.002 * t));
})));
// chimes on scene changes (match SCENES[].from in index.html)
const chime = (t0, m, a = 0.09) => [0, 7, 12].forEach((iv, i) => add(t0 + i * 0.09, 2.5, t =>
  a * Math.exp(-t * 2.4) * (Math.sin(2 * Math.PI * hz(m + iv) * t) + 0.3 * Math.sin(2 * Math.PI * hz(m + iv) * 2.01 * t) * Math.exp(-t * 6))));
[[0.2, 74], [3.9, 78], [7.9, 76], [12.4, 73], [16.4, 74]].forEach(([t, m]) => chime(t, m));
// airy swells under each dissolve
let lp = 0;
[3.7, 7.7, 12.2, 16.2, 19.4].forEach(t0 => add(t0 - 0.2, 1.0, t => { lp = lp * 0.92 + noise() * 0.08; return 0.12 * Math.sin(Math.PI * t) ** 2 * lp * 4; }));

const b = Buffer.alloc(44 + N * 2);
b.write('RIFF', 0); b.writeUInt32LE(36 + N * 2, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(N * 2, 40);
for (let i = 0; i < N; i++) b.writeInt16LE(Math.round(Math.tanh(mix[i] * 1.2) * 32767), 44 + i * 2);
mkdirSync(path.join(DIR, 'out'), { recursive: true }); writeFileSync(path.join(DIR, 'out/audio.wav'), b); console.log('wrote out/audio.wav');
