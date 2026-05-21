const Audio = {
  sounds: {},
  bgm: null,
  muted: false,

  load() {
    const files = {
      bgm_vn: "assets/audio/bgm_vn.mp3",
      bgm_game: "assets/audio/bgm_game.mp3",
      correct: "assets/audio/correct.mp3",
      wrong: "assets/audio/error_.mp3",
      hint: "assets/audio/lawan.mp3",
      tick: "assets/audio/clock.mp3",
      explosion: "assets/audio/explosion.mp3",
      win: "assets/audio/EZ4ENCE.mp3",
    };

    for (const [key, src] of Object.entries(files)) {
      const audio = new window.Audio(src);
      audio.preload = "auto";
      this.sounds[key] = audio;
    }

    // Loop BGM
    this.sounds.bgm_vn.loop = true;
    this.sounds.bgm_vn.volume = 0.4;
    this.sounds.bgm_game.loop = true;
    this.sounds.bgm_game.volume = 0.4;
  },

  playBGM(name) {
    if (this.muted) return;
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.currentTime = 0;
    }
    this.bgm = this.sounds[name];
    this.bgm.play().catch(() => {}); // catch autoplay block
  },

  stopBGM() {
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.currentTime = 0;
      this.bgm = null;
    }
  },

  play(name) {
    if (this.muted) return;
    const sfx = this.sounds[name];
    if (!sfx) return;
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  },

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopBGM();
    } else {
      // Resume BGM sesuai screen aktif
      const gameActive = document
        .getElementById("game-screen")
        .classList.contains("active");
      this.playBGM(gameActive ? "bgm_game" : "bgm_vn");
    }
    return this.muted;
  },
};
