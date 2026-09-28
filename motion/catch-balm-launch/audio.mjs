// node audio.mjs → out/audio.wav   Score + SFX synthesized on the film's 120 BPM grid (beat = 0.5s).
// Cue times mirror the scene timings in index.html — change both together.
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const SR = 48000, DUR = 15, N = DUR * SR, BEAT = 0.5;
const mix = new Float32Array(N), plk = new Float32Array(N);
const hz = m => 440 * 2 ** ((m - 69) / 12);
let seed = 7; const noise = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2147483648 - 1;

function add(buf, t0, len, fn) {
  const s = Math.floor(t0 * SR);
  for (let i = 0; i < len * SR && s + i < N; i++) if (s + i >= 0) buf[s + i] += fn(i / SR);
}

// --- score: Fmaj7 → Am7 → Dm7 → Bbmaj7, one chord per bar (2s)
const CHORDS = [[53, 57, 60, 64], [57, 60, 64, 67], [50, 53, 57, 60], [46, 50, 53, 57]];
const ARP = [0, 2, 1, 3, 2, 3, 1, 2];
const END = 14.0;                                   // music resolves under the logo
for (let bar = 0; bar * 2 < END; bar++) {
  const ch = CHORDS[bar % 4];
  // pad
  ch.forEach(m => add(mix, bar * 2, 2.4, t => {
    const env = Math.min(1, t / 0.4) * Math.min(1, (2.4 - t) / 0.6);
    return 0.028 * env * (Math.sin(2 * Math.PI * hz(m) * t) + 0.25 * Math.sin(2 * Math.PI * hz(m) * 2.003 * t));
  }));
  // glassy pluck arpeggio, 8ths
  for (let k = 0; k < 8; k++) {
    const t0 = bar * 2 + k * 0.25; if (t0 >= END) break;
    const f = hz(ch[ARP[k]] + 12), a = k % 2 ? 0.07 : 0.1;
    add(plk, t0, 0.9, t => a * Math.exp(-t * 7) * (Math.sin(2 * Math.PI * f * t) + 0.35 * Math.sin(2 * Math.PI * f * 3 * t) * Math.exp(-t * 20)));
  }
  // bass on the bar
  add(mix, bar * 2, 1.8, t => 0.16 * Math.exp(-t * 1.6) * Math.min(1, t / 0.02) * Math.sin(2 * Math.PI * hz(ch[0] - 12) * t));
}
// stereo-less "space": feedback delay on the pluck bus (dotted 8th)
const D = Math.round(0.375 * SR);
for (let i = D; i < N; i++) plk[i] += plk[i - D] * 0.38;
for (let i = 0; i < N; i++) mix[i] += plk[i];

// --- drums: soft kick every beat from the hero drop until the logo; ticks on off-8ths from the carousel
const kick = (t0, a = 0.55) => add(mix, t0, 0.45, t => a * Math.exp(-t * 11) * Math.sin(2 * Math.PI * (48 + 70 * Math.exp(-t * 30)) * t));
for (let t = 2; t < 13.5; t += BEAT) kick(t);
let prev = 0;
for (let t = 4.25; t < 13.5; t += BEAT) add(mix, t, 0.06, u => { const n = noise(), h = n - prev; prev = n; return 0.05 * h * Math.exp(-u * 70); });

// --- SFX
const whoosh = (tHit, len = 0.45, a = 0.22) => add(mix, tHit - len, len + 0.15, t => {
  const x = t / len, env = x < 1 ? x ** 2.2 : Math.exp(-(t - len) * 30);
  const n = noise(); prev = prev * 0.85 + n * 0.15;        // one-pole lowpass → airy
  return a * env * prev * 3;
});
const click = (t0, a = 0.35) => add(mix, t0, 0.05, t => a * Math.sin(2 * Math.PI * 2400 * t) * Math.exp(-t * 110));
const pop = (t0, a = 0.35) => add(mix, t0, 0.2, t => a * Math.sin(2 * Math.PI * (500 + 1400 * t) * t) * Math.exp(-t * 26));
const shimmer = (t0, a = 0.05) => add(mix, t0, 0.9, t => a * Math.sin(Math.PI * Math.min(1, t / 0.9)) *
  [2637, 3136, 3951, 5274].reduce((s, f, i) => s + Math.sin(2 * Math.PI * f * t + i) * Math.exp(-t * (2 + i)), 0));

whoosh(2.0); whoosh(8.0); whoosh(9.5, 0.3, 0.14); whoosh(11.0); whoosh(13.5);
[5, 6, 7].forEach(t => { whoosh(t, 0.25, 0.1); click(t + 0.05); });
[11, 11.25, 11.5, 11.75].forEach(t => click(t, 0.25));
shimmer(2.55); shimmer(12.1, 0.04);
click(12.25, 0.2);                      // strike-through
pop(12.75);                             // 904₺
[13.5, 13.625, 13.75].forEach(t => click(t, 0.3));
kick(13.75, 0.7);                       // the "o" lands
shimmer(14.0, 0.06);

// --- master: gentle fades, soft clip, 16-bit mono WAV
for (let i = 0; i < N; i++) {
  const t = i / SR, f = Math.min(1, t / 0.05) * Math.min(1, (DUR - t) / 0.4);
  mix[i] = Math.tanh(mix[i] * 1.1 * f);
}
const b = Buffer.alloc(44 + N * 2);
b.write('RIFF', 0); b.writeUInt32LE(36 + N * 2, 4); b.write('WAVEfmt ', 8);
b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
b.write('data', 36); b.writeUInt32LE(N * 2, 40);
for (let i = 0; i < N; i++) b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, mix[i])) * 32767), 44 + i * 2);
mkdirSync(path.join(DIR, 'out'), { recursive: true });
writeFileSync(path.join(DIR, 'out/audio.wav'), b);
console.log('wrote out/audio.wav');
