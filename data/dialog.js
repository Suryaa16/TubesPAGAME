const dialogData = [
  {
    name: "SISTEM",
    text: "[ 23:47 — Gedung Sigma Tech, Lantai 12 ]",
    background: "#0d0d1a",
    character: null,
  },
  {
    name: "Reza",
    text: "Kenapa sih deadline selalu malem-malem... *nguap* sebentar lagi kelar kok.",
    background: "#1a1a2e",
    character: "reza_idle",
  },
  {
    name: "SISTEM",
    text: "[ BRZZZT— lampu mati. Emergency light menyala merah ]",
    background: "#2d0a0a",
    character: null,
  },
  {
    name: "Reza",
    text: "HAH?! APA-APAAN INI?!",
    background: "#2d0a0a",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "Halo, Reza. Saya ARIA — sistem AI gedung ini. Ada situasi darurat yang perlu kamu tangani.",
    background: "#0f1a2d",
    character: "aria_idle",
  },
  {
    name: "Reza",
    text: "SI-SIAPA KAMU?! Dari mana kamu tau nama aku?!",
    background: "#0f1a2d",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "ID card kamu masih tergantung di leher. Tulisannya cukup besar.",
    background: "#0f1a2d",
    character: "aria_idle",
  },
  {
    name: "Reza",
    text: "...oh.",
    background: "#0f1a2d",
    character: "reza_idle",
  },
  {
    name: "ARIA",
    text: "Seseorang menanam 4 bom di sistem server gedung ini. Semuanya terhubung ke kode yang sengaja dirusak.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "ARIA",
    text: "Satu-satunya cara mematikannya: temukan dan perbaiki bug di kode tersebut. Kamu developer, kan?",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "A-aku biasanya cuma bikin CRUD app... tapi oke, oke. GIMANA CARANYA?!",
    background: "#1a0a0a",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "Tenang. Aku akan bantu. Tapi ingat — setiap jawaban salah akan mempercepat timer bom.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "Kenapa selalu aku yang kena begini... *tarik napas* Oke. Ayo mulai.",
    background: "#1a0a0a",
    character: "reza_determined",
  },
  {
    name: "SISTEM",
    text: "[ BOM #1 AKTIF — SERVER ROOM ]",
    background: "#2d0a0a",
    character: null,
  },
];

const stageData = [
  {
    stage: 1,
    title: "BOM #1 — Server Room",
    timeLimit: 60,
    code: `def hitung_total(data):
    result = 0
    for i in range(len(data))
        result += data[i]
    return result`,
    errorLine: 3,
    question: "Bug ditemukan di baris 3. Pilih perbaikan yang benar:",
    answers: [
      "for i in range(len(data)):",
      "for i in range(len(data);",
      "for i in range(data):",
    ],
    correct: 0,
    explanation: "Kurang tanda titik dua (:) di akhir for loop!",
  },
  {
    stage: 2,
    title: "BOM #2 — Control Panel",
    timeLimit: 50,
    code: `function cekUsia(umur) {
    if (umur > 17) {
        return "Belum Dewasa";
    } else {
        return "Dewasa";
    }
}`,
    errorLine: 3,
    question: "Logika kondisi terbalik! Pilih perbaikan yang benar:",
    answers: ["if (umur >= 17)", "if (umur < 17)", "if (umur <= 17)"],
    correct: 1,
    explanation: "Kondisinya terbalik! Harusnya umur < 17 yang 'Belum Dewasa'.",
  },
  {
    stage: 3,
    title: "BOM #3 — Power Core",
    timeLimit: 40,
    code: `int[] angka = {1, 2, 3, 4, 5};
for (int i = 0; i <= angka.length; i++) {
    System.out.println(angka[i]);
}`,
    errorLine: 2,
    question: "Ada runtime error! Pilih perbaikan yang benar:",
    answers: [
      "for (int i = 0; i < angka.length; i++)",
      "for (int i = 1; i <= angka.length; i++)",
      "for (int i = 0; i < angka.length - 1; i++)",
    ],
    correct: 0,
    explanation:
      "Index array mulai dari 0, jadi harus i < length, bukan i <= length!",
  },
  {
    stage: 4,
    title: "BOM #4 — Main Database",
    timeLimit: 30,
    code: `def bagi(a, b):
    hasil = a / b
    return hasil

print(bagi(10, 0))`,
    errorLine: 2,
    question: "Ada 2 bug! Pilih perbaikan yang paling tepat:",
    answers: [
      "if b == 0: return 'Error: Tidak bisa bagi 0'",
      "hasil = a // b",
      "if b != 0: hasil = a / b",
    ],
    correct: 0,
    explanation: "Harus ada pengecekan pembagian dengan 0 sebelum operasi!",
  },
];

const ariaTransitions = [
  "Bagus! Bom #1 berhasil dijinakkan. Tapi masih ada 3 lagi... Aku mulai curiga ini bukan ulah sembarangan orang.",
  "Luar biasa! Kamu lebih jago dari yang aku kira. Oh, aku menemukan log akses mencurigakan — sepertinya pelakunya punya akses internal.",
  "Tiga bom sudah! Satu lagi Reza, tahan! P.S. — Pelakunya pakai ID card atas nama 'Ahmad Intern'... familiar?",
];
