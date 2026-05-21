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

  // Stop typewriter sebelumnya kalau masih jalan
  if (typeWriterInterval) clearInterval(typeWriterInterval);

  let i = 0;
  typeWriterInterval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
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
