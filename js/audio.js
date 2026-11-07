// =============================================================================
// GESTOR DE AUDIO Y SÍNTESIS DE VOZ · LENGUA 4º PRIMARIA · TEMA 2
// Web Audio API sintetizado nativo + SpeechSynthesis (Español)
// Optimizado para iPad, Safari, Chrome y dispositivos táctiles
// =============================================================================

class SoundManager {
  constructor() {
    this.soundEnabled = true;
    this.voiceEnabled = false;
    this.audioCtx = null;
    this.synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
    this.currentUtterance = null;
  }

  initContext() {
    if (!this.audioCtx) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        try {
          this.audioCtx = new AudioContextClass();
        } catch (e) {
          console.warn("AudioContext error", e);
        }
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      try {
        this.audioCtx.resume();
      } catch (e) {}
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    if (!this.voiceEnabled && this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    return this.voiceEnabled;
  }

  playTone(frequency, type, duration, gainValue, startTime) {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.audioCtx) return;

    type = type || "sine";
    duration = duration || 0.15;
    gainValue = gainValue || 0.15;
    startTime = startTime || 0;

    try {
      var t = this.audioCtx.currentTime + startTime;
      var osc = this.audioCtx.createOscillator();
      var gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(gainValue, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + duration);
    } catch (e) {}
  }

  playClick() {
    this.playTone(620, "triangle", 0.05, 0.08, 0);
  }

  playCorrect() {
    if (!this.soundEnabled) return;
    this.playTone(523.25, "sine", 0.1, 0.15, 0);       // C5
    this.playTone(659.25, "sine", 0.1, 0.15, 0.08);    // E5
    this.playTone(783.99, "sine", 0.22, 0.2, 0.16);     // G5
  }

  playError() {
    if (!this.soundEnabled) return;
    this.playTone(330, "sawtooth", 0.12, 0.1, 0);
    this.playTone(270, "sawtooth", 0.22, 0.12, 0.1);
  }

  playSuccess() {
    if (!this.soundEnabled) return;
    // Fanfarria triunfal
    this.playTone(523.25, "triangle", 0.12, 0.2, 0);     // C5
    this.playTone(659.25, "triangle", 0.12, 0.2, 0.12);  // E5
    this.playTone(783.99, "triangle", 0.12, 0.2, 0.24);  // G5
    this.playTone(1046.50, "triangle", 0.35, 0.25, 0.36); // C6
  }

  playBadge() {
    if (!this.soundEnabled) return;
    this.playTone(440, "sine", 0.08, 0.15, 0);
    this.playTone(554.37, "sine", 0.08, 0.15, 0.08);
    this.playTone(659.25, "sine", 0.18, 0.2, 0.16);
  }

  playLevelUp() {
    if (!this.soundEnabled) return;
    var notes = [440, 493.88, 554.37, 587.33, 659.25, 739.99, 830.61, 880];
    for (var i = 0; i < notes.length; i++) {
      this.playTone(notes[i], "triangle", 0.1, 0.15, i * 0.06);
    }
  }

  speak(text) {
    if (!this.synth) return;
    try {
      this.synth.cancel();
      var cleanText = text.replace(/[*_#`]/g, '').trim();
      if (!cleanText) return;

      var utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'es-ES';
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      var voices = this.synth.getVoices();
      var spanishVoice = voices.find(function(v) {
        return v.lang.startsWith('es') && (v.name.includes('Monica') || v.name.includes('Laura') || v.name.includes('Lucia') || v.name.includes('Natural') || v.name.includes('Google'));
      }) || voices.find(function(v) { return v.lang.startsWith('es'); });

      if (spanishVoice) {
        utterance.voice = spanishVoice;
      }

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (e) {
      console.warn("SpeechSynthesis error", e);
    }
  }

  stopVoice() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }
}

// Instancia global
window.soundMgr = new SoundManager();
