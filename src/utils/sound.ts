// Web Audio API generator for Tibetan singing bowl bells and calming resonance
// Does not depend on external audio URLs that could fail to load.

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a resonant Tibetan singing bowl chime with rich harmonics.
 */
export function playTibetanBell(pitchMultiplier = 1.0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.5, now);
  masterGain.connect(ctx.destination);

  // Fundamental frequency ~ 329.63 Hz (E4) or tuned with multiplier
  const baseFreq = 392 * pitchMultiplier; // Sol (G4) peaceful resonance

  // Overtones found in Tibetan bowls: 1x, 2.76x, 5.4x, 8.9x
  const harmonics = [
    { freq: baseFreq, gain: 0.6, decay: 4.5 },
    { freq: baseFreq * 2.01, gain: 0.35, decay: 3.8 },
    { freq: baseFreq * 3.02, gain: 0.2, decay: 2.8 },
    { freq: baseFreq * 4.25, gain: 0.12, decay: 2.0 },
    { freq: baseFreq * 5.8, gain: 0.06, decay: 1.4 },
  ];

  harmonics.forEach(({ freq, gain, decay }) => {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle pitch dip simulating bowl striking
    osc.frequency.exponentialRampToValueAtTime(freq * 0.998, now + decay);

    oscGain.gain.setValueAtTime(0.0001, now);
    // Instant attack
    oscGain.gain.exponentialRampToValueAtTime(gain, now + 0.02);
    // Long gentle decay
    oscGain.gain.exponentialRampToValueAtTime(0.00001, now + decay);

    osc.connect(oscGain);
    oscGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + decay);
  });
}

/**
 * Ambient Drone Controller (432Hz healing frequency harmonic warm bed)
 */
class AmbientDroneController {
  private isPlaying = false;
  private nodes: { oscs: OscillatorNode[]; gains: GainNode[]; master: GainNode } | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getActive(): boolean {
    return this.isPlaying;
  }

  public start() {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (this.isPlaying) return;

    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    // Gentle fade in
    master.gain.linearRampToValueAtTime(0.09, now + 3);
    master.connect(ctx.destination);

    // Warm chord based on 432 Hz and warm sub-harmonics (A 216Hz, E 324Hz, A 432Hz, C# 540Hz)
    const freqs = [108, 216, 324, 432, 648];
    const oscs: OscillatorNode[] = [];
    const gains: GainNode[] = [];

    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f + (idx % 2 === 0 ? 0.3 : -0.3), now);

      // Subtle LFO pulse
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.03, now);
      lfoGain.gain.setValueAtTime(0.03, now);
      lfo.connect(lfoGain.gain);
      lfo.start(now);

      gain.gain.setValueAtTime(0.15 / (idx + 1), now);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now);

      oscs.push(osc);
      gains.push(gain);
    });

    this.nodes = { oscs, gains, master };
    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying || !this.nodes) return;
    const ctx = getAudioContext();
    if (ctx) {
      const now = ctx.currentTime;
      this.nodes.master.gain.linearRampToValueAtTime(0.0001, now + 1.5);
      setTimeout(() => {
        this.nodes?.oscs.forEach((o) => {
          try {
            o.stop();
            o.disconnect();
          } catch {
            // Ignore if already disconnected
          }
        });
        this.nodes = null;
        this.isPlaying = false;
      }, 1600);
    } else {
      this.nodes = null;
      this.isPlaying = false;
    }
  }
}

export const ambientSound = new AmbientDroneController();
