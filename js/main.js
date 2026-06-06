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

function saveGame(slot) {
  const data = {
    stage: currentStage,
    score: score,
    timestamp: new Date().toLocaleString("id-ID"),
  };
  localStorage.setItem("save_" + slot, JSON.stringify(data));
  updateSlotDisplay();
}

function loadSlot(slot) {
  const data = JSON.parse(localStorage.getItem("save_" + slot));
  if (!data) return;
  currentStage = data.stage;
  score = data.score;
  wrongAnswers = data.wrongAnswers || 0;
  hintsLeft = data.hintsLeft || 3;

  switchScreen("vn-screen");
  // Tampilkan transisi dulu sebelum masuk stage
  showTransitionDialog(ariaTransitions[currentStage - 1], () => {
    switchScreen("game-screen");
    loadStage(currentStage);
  });
}

function updateSlotDisplay() {
  for (let i = 0; i < 3; i++) {
    const data = JSON.parse(localStorage.getItem("save_" + i));
    const el = document.getElementById("slot-" + i);
    if (data) {
      el.textContent = `Slot ${i + 1} — Stage ${data.stage + 1} | ${data.timestamp}`;
      el.onclick = () => loadSlot(i);
    } else {
      el.textContent = `Slot ${i + 1} — Kosong`;
      el.onclick = null;
    }
  }
}

function showSavePrompt(callback) {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(13,13,26,0.95);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    z-index: 9999; gap: 16px;
  `;
  overlay.innerHTML = `
    <div style="font-family:monospace; font-size:18px; color:#c8a951; letter-spacing:3px; margin-bottom:8px;">SIMPAN PROGRESS?</div>
    <div style="font-size:13px; color:#888; margin-bottom:8px;">Stage ${currentStage} selesai — Skor: ${score}</div>
    <div id="save-slots-prompt" style="display:flex; flex-direction:column; gap:8px; width:320px;"></div>
    <button id="skip-save" style="margin-top:8px; background:transparent; border:1px solid #333; color:#555; padding:10px 32px; font-family:monospace; font-size:13px; cursor:pointer; letter-spacing:2px;">LEWATI</button>
  `;
  document.body.appendChild(overlay);

  const container = overlay.querySelector("#save-slots-prompt");
  for (let i = 0; i < 3; i++) {
    const data = JSON.parse(localStorage.getItem("save_" + i));
    const btn = document.createElement("button");
    btn.style.cssText = `background:#14100a; border:1px solid #3a3020; border-left:4px solid #c8a951; padding:14px 20px; color:#c8a951; font-family:monospace; font-size:13px; cursor:pointer; text-align:left; letter-spacing:1px;`;
    btn.textContent = data
      ? `Slot ${i + 1} — Stage ${data.stage + 1} | ${data.timestamp}`
      : `Slot ${i + 1} — Kosong`;
    btn.onclick = (e) => {
      e.stopPropagation();
      saveGame(i);
      document.body.removeChild(overlay);
      callback();
    };
    container.appendChild(btn);
  }

  overlay.querySelector("#skip-save").onclick = (e) => {
    e.stopPropagation();
    document.body.removeChild(overlay);
    callback();
  };
}

window.onload = function () {
  Audio.load();

  document.getElementById("btn-new-game").addEventListener("click", () => {
    switchScreen("vn-screen");
    startVN();
  });

  document.getElementById("btn-load").addEventListener("click", () => {
    switchScreen("load-screen");
  });

  document.getElementById("btn-back").addEventListener("click", () => {
    switchScreen("start-screen");
  });

  updateSlotDisplay();
};
