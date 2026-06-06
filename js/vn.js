let currentDialog = 0;

function startVN() {
  currentDialog = 0;
  showDialog();

  // Hapus listener lama dulu biar tidak dobel
  const textbox = document.getElementById("vn-textbox");
  textbox.replaceWith(textbox.cloneNode(true));
  document.getElementById("vn-textbox").addEventListener("click", nextDialog);
}

function showDialog() {
  const d = dialogData[currentDialog];

  // Nama & warna
  const nameEl = document.getElementById("vn-name");
  nameEl.textContent = d.name;
  nameEl.className = "";
  if (d.name === "ARIA") nameEl.classList.add("aria");
  if (d.name === "SISTEM") nameEl.classList.add("sistem");

  // Typewriter
  typeWriter(d.text);

  // Background
  document.getElementById("vn-background").style.background = d.background;

  // Karakter
  const charEl = document.getElementById("vn-character");
  if (d.character) {
    charEl.innerHTML = `<img src="assets/images/characters/${d.character}.png" alt="${d.character}">`;
    charEl.style.opacity = "1";
  } else {
    charEl.innerHTML = "";
    charEl.style.opacity = "0";
  }

  // Danger mode
  if (d.background.includes("2d0a") || d.background.includes("1a0a")) {
    document.getElementById("vn-screen").classList.add("danger");
  } else {
    document.getElementById("vn-screen").classList.remove("danger");
  }
}

let typeWriterInterval = null;

function typeWriter(text) {
  const el = document.getElementById("vn-text");
  el.textContent = "";

  if (typeWriterInterval) clearInterval(typeWriterInterval);

  let i = 0;
  typeWriterInterval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(typeWriterInterval);
      typeWriterInterval = null;
    }
  }, 30);
}

function nextDialog() {
  // Kalau typewriter masih jalan, skip langsung tampilkan semua teks
  if (typeWriterInterval) {
    clearInterval(typeWriterInterval);
    typeWriterInterval = null;
    document.getElementById("vn-text").textContent =
      dialogData[currentDialog].text;
    return;
  }

  currentDialog++;
  if (currentDialog >= dialogData.length) {
    switchScreen("game-screen");
    startGame();
    return;
  }
  showDialog();
}

function showTransitionDialog(lines, callback) {
  console.log("showTransitionDialog dipanggil, lines:", lines);
  let idx = 0;

  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(13,13,26,0.97);
    display: flex; flex-direction: column;
    justify-content: flex-end;
    z-index: 999; cursor: pointer;
  `;

  overlay.innerHTML = `
    <div style="background:rgba(10,10,20,0.97); border-top:2px solid #e94560; padding:24px 48px 20px; min-height:150px;">
      <div id="trans-name" style="font-family:monospace; font-size:16px; color:#4ecca3; margin-bottom:12px; letter-spacing:2px;">ARIA</div>
      <div id="trans-text" style="font-size:16px; line-height:1.8; color:#e8e8f0;"></div>
      <div style="text-align:right; color:#533483; font-size:12px; margin-top:12px;">[ KLIK UNTUK LANJUT ]</div>
    </div>
  `;

  document.body.appendChild(overlay);

  function showLine() {
    const rawText = lines[idx];
    const nameEl = overlay.querySelector("#trans-name");
    const textEl = overlay.querySelector("#trans-text");

    // Tentukan nama
    if (rawText.startsWith("[ AHMAD")) {
      nameEl.textContent = "AHMAD — via intercom";
      nameEl.style.color = "#ff9800";
    } else if (rawText.startsWith("[ Reza")) {
      nameEl.textContent = "Reza";
      nameEl.style.color = "#e94560";
    } else if (rawText.startsWith("[ ARIA")) {
      nameEl.textContent = "ARIA";
      nameEl.style.color = "#4ecca3";
    } else if (rawText.startsWith("[ SISTEM")) {
      nameEl.textContent = "SISTEM";
      nameEl.style.color = "#f5a623";
    } else {
      nameEl.textContent = "ARIA";
      nameEl.style.color = "#4ecca3";
    }

    // Bersihkan prefix [ NAMA ]: kalau ada, kalau tidak ada tampilkan apa adanya
    const colonIdx = rawText.indexOf("]: ");
    const displayText = colonIdx !== -1 ? rawText.slice(colonIdx + 3) : rawText;

    textEl.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < displayText.length) {
        textEl.textContent += displayText[i];
        i++;
      } else {
        clearInterval(interval);
        overlay._interval = null;
      }
    }, 25);

    overlay._interval = interval;
    overlay._fullText = displayText;
  }

  showLine();

  overlay.addEventListener("click", () => {
    if (overlay._interval) {
      clearInterval(overlay._interval);
      overlay._interval = null;
      overlay.querySelector("#trans-text").textContent = overlay._fullText;
      return;
    }
    idx++;
    if (idx >= lines.length) {
      document.body.removeChild(overlay);
      callback();
      return;
    }
    showLine();
  });
}
