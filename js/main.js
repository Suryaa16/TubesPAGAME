function switchScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");

  // Ganti BGM sesuai screen
  if (screenId === "vn-screen") Audio.playBGM("bgm_vn");
  if (screenId === "game-screen") Audio.playBGM("bgm_game");
  if (screenId === "gameover-screen" || screenId === "win-screen")
    Audio.stopBGM();
}

function toggleMute() {
  const muted = Audio.toggleMute();
  document.getElementById("mute-btn").textContent = muted ? "🔇" : "🔊";
}

window.onload = function () {
  Audio.load();
  // BGM mulai setelah user interaksi pertama (klik)
  document.body.addEventListener(
    "click",
    () => {
      if (!Audio.bgm && !Audio.muted) Audio.playBGM("bgm_vn");
    },
    { once: true },
  );
  startVN();
};
