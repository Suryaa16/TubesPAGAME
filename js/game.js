let currentStage = 0;
let timeLeft = 60;
let hintsLeft = 3;
let timerInterval = null;
let score = 0;
let wrongAnswers = 0;

function renderCode(code, errorLine) {
  const lines = code.split("\n");
  return lines
    .map((line, i) => {
      const lineNum = i + 1;
      const highlighted = highlightSyntax(line);
      return `<span class="line" data-line="${lineNum}">
            <span class="line-num">${lineNum}</span>${highlighted}
        </span>`;
    })
    .join("");
}

function highlightSyntax(line) {
  const keywords = [
    "def",
    "return",
    "for",
    "if",
    "else",
    "in",
    "range",
    "function",
    "int",
    "void",
    "print",
    "System.out.println",
  ];
  let result = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // String
  result = result.replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
  result = result.replace(/'([^']*)'/g, "<span class=\"string\">'$1'</span>");

  // Numbers
  result = result.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');

  // Keywords
  keywords.forEach((kw) => {
    const re = new RegExp(`\\b(${kw})\\b`, "g");
    result = result.replace(re, '<span class="keyword">$1</span>');
  });

  return result;
}

function startGame() {
  currentStage = 0;
  score = 0;
  wrongAnswers = 0;
  hintsLeft = 3;
  loadStage(currentStage);
}

function loadStage(index) {
  const stage = stageData[index];
  timeLeft = stage.timeLimit;

  // Update HUD
  document.getElementById("stage-info").textContent = `Stage ${index + 1} / 4`;
  document.getElementById("hints").textContent = `💡 ${hintsLeft}`;

  // Tampilkan kode
  document.getElementById("code-display").innerHTML = renderCode(
    stage.code,
    stage.errorLine,
  );
  document.getElementById("stage-title").textContent = stage.title;
  document.getElementById("question-text").textContent = stage.question;

  // Tampilkan soal di feedback area
  document.getElementById("feedback").textContent = stage.question;
  document.getElementById("feedback").style.color = "#a0a0c0";

  // Tampilkan jawaban
  const labels = ["A", "B", "C"];
  stage.answers.forEach((ans, i) => {
    const btn = document.getElementById(`btn-${labels[i].toLowerCase()}`);
    btn.textContent = `${labels[i]}. ${ans}`;
    btn.className = "answer-btn";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(i);
  });

  // Reset hint button
  document.getElementById("hint-btn").onclick = useHint;
  document.getElementById("hint-btn").disabled = hintsLeft === 0;

  // Start timer
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(tickTimer, 1000);
}

function tickTimer() {
  if (timeLeft <= 10) {
    Audio.play("tick");
  }
  timeLeft--;
  updateTimerDisplay();

  // Efek visual makin tegang
  const timerEl = document.getElementById("timer");
  if (timeLeft <= 10) {
    timerEl.style.animation = "blink 0.3s infinite";
    document.getElementById("game-screen").style.borderTop =
      "4px solid #e94560";
  } else if (timeLeft <= 20) {
    timerEl.style.animation = "blink 0.6s infinite";
  }

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    gameOver();
  }
}

function updateTimerDisplay() {
  document.getElementById("timer").textContent = `⏱ ${timeLeft}`;
}

function checkAnswer(selected) {
  const stage = stageData[currentStage];
  const labels = ["a", "b", "c"];
  const btn = document.getElementById(`btn-${labels[selected]}`);

  if (selected === stage.correct) {
    // Benar!
    Audio.play("correct");
    btn.classList.add("correct");
    document.getElementById("feedback").textContent =
      `✅ BENAR! ${stage.explanation}`;
    document.getElementById("feedback").style.color = "#4ecca3";

    // Disable semua button
    labels.forEach(
      (l) => (document.getElementById(`btn-${l}`).disabled = true),
    );

    clearInterval(timerInterval);
    score += timeLeft * 10;

    setTimeout(() => nextStage(), 2000);
  } else {
    // Salah!
    Audio.play("wrong");
    btn.classList.add("wrong");
    timeLeft = Math.max(0, timeLeft - 10);
    wrongAnswers++;
    updateTimerDisplay();
    document.getElementById("feedback").textContent =
      `❌ SALAH! Timer -10 detik!`;
    document.getElementById("feedback").style.color = "#e94560";

    // Shake effect
    document.getElementById("game-screen").style.animation = "shake 0.3s";
    setTimeout(() => {
      document.getElementById("game-screen").style.animation = "";
      btn.classList.remove("wrong");
      document.getElementById("feedback").textContent = stage.question;
      document.getElementById("feedback").style.color = "#a0a0c0";
    }, 800);
  }
}

function useHint() {
  if (hintsLeft <= 0) return;
  Audio.play("hint");
  const stage = stageData[currentStage];
  hintsLeft--;
  timeLeft = Math.max(1, timeLeft - 10);
  updateTimerDisplay();

  // Highlight baris yang error baru muncul setelah pakai hint
  const lines = document.querySelectorAll("#code-display .line");
  lines.forEach((line) => {
    if (parseInt(line.dataset.line) === stage.errorLine) {
      line.style.background = "rgba(233,69,96,0.12)";
      line.querySelector(".line-num").style.color = "#e94560";
    }
  });

  document.getElementById("feedback").textContent =
    `💡 Hint: Perhatikan baris ${stage.errorLine}! (-10 detik)`;
  document.getElementById("feedback").style.color = "#f5a623";
  document.getElementById("hints").textContent = `💡 ${hintsLeft}`;

  if (hintsLeft === 0) {
    document.getElementById("hint-btn").disabled = true;
  }
}

function nextStage() {
  currentStage++;

  if (currentStage >= stageData.length) {
    // Semua stage selesai → WIN!
    winGame();
    return;
  }

  // Tampilkan dialog transisi ARIA dulu
  showTransitionDialog(ariaTransitions[currentStage - 1], () => {
    loadStage(currentStage);
  });
}

function showTransitionDialog(text, callback) {
  // Overlay dialog singkat
  const overlay = document.createElement("div");
  overlay.style.cssText = `
        position: fixed; top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(13,13,26,0.95);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        z-index: 999; cursor: pointer;
        padding: 40px; text-align: center;
    `;
  overlay.innerHTML = `
        <div style="color:#4ecca3; font-size:18px; margin-bottom:20px;">ARIA</div>
        <div style="color:#e0e0e0; font-size:16px; line-height:1.8; max-width:600px;">${text}</div>
        <div style="color:#533483; font-size:13px; margin-top:30px;">▶ Klik untuk lanjut</div>
    `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
    callback();
  });
}

function gameOver() {
  Audio.play("explosion");
  switchScreen("gameover-screen");
  document.getElementById("gameover-msg").textContent =
    `Reza tidak pernah lembur lagi... karena kantornya sudah tidak ada. 💥\n\nSkor akhir: ${score}`;
  document.getElementById("restart-btn").onclick = () => {
    switchScreen("vn-screen");
    startVN();
  };
}

function winGame() {
  Audio.play("win");
  switchScreen("win-screen");
  document.getElementById("win-msg").textContent =
    `Semua bom berhasil dijinakkan! Pelakunya ternyata... Ahmad, intern yang belum digaji 3 bulan. 😂`;
  document.getElementById("score-display").innerHTML = `
        <div style="font-size:24px; color:#f5a623; margin:20px 0;">
            Skor: ${score}<br>
            Jawaban Salah: ${wrongAnswers}<br>
            Hint Terpakai: ${3 - hintsLeft}
        </div>
    `;
  document.getElementById("play-again-btn").onclick = () => {
    switchScreen("vn-screen");
    startVN();
  };
}
