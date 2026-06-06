const dialogData = [
  {
    name: "SISTEM",
    text: "[ JUMAT, 23:47 — Gedung Sigma Tech, Lantai 12 ]\n[ Semua karyawan sudah pulang. Semua... kecuali satu. ]",
    background: "#0d0d1a",
    character: null,
  },
  {
    name: "Reza",
    text: "Duh deadline besok pagi... *nguap* tapi tenang, tinggal satu fitur lagi. Santai.",
    background: "#1a1a2e",
    character: "reza_idle",
  },
  {
    name: "Reza",
    text: "*mulai nyanyi sendiri* La la la... enak juga kantor sepi, bisa pake headset kenceng-kenceng.",
    background: "#1a1a2e",
    character: "reza_idle",
  },
  {
    name: "SISTEM",
    text: "[ BRZZZT— seluruh lampu mati seketika ]\n[ Emergency light menyala MERAH ]",
    background: "#2d0a0a",
    character: null,
  },
  {
    name: "Reza",
    text: "HAH?! APA-APAAN INI?! GEMPA?! KEBAKARAN?! PLN LAGI?!",
    background: "#2d0a0a",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "Halo, Reza Pratama. Saya ARIA — Artificial Response & Infrastructure AI gedung ini. Harap tenang.",
    background: "#0f1a2d",
    character: "aria_idle",
  },
  {
    name: "Reza",
    text: "SIAPA ITU?! SUARA DARI MANA?! KAMU TAU NAMA AKU DARI MANA?!",
    background: "#0f1a2d",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "ID card kamu masih tergantung di leher. Tulisannya cukup besar. Fotonya juga... cukup unik.",
    background: "#0f1a2d",
    character: "aria_idle",
  },
  {
    name: "Reza",
    text: "...foto itu diambil waktu aku abis flu. Tolong jangan bahas itu.",
    background: "#0f1a2d",
    character: "reza_idle",
  },
  {
    name: "ARIA",
    text: "Fokus, Reza. Seseorang baru saja menanam 4 bom logika di sistem server gedung ini.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "ARIA",
    text: "Jika tidak dijinakkan dalam waktu yang ditentukan, seluruh data perusahaan akan terhapus permanen.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "MELEDAK?!",
    background: "#2d0a0a",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "...tidak sampai meledak. Tapi semua data 5 tahun perusahaan hilang. Termasuk project deadline kamu besok.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "SAMA AJA DONG! ITU BERARTI AKU DIPECAT! TOLONG SAYA—",
    background: "#2d0a0a",
    character: "reza_panic",
  },
  {
    name: "ARIA",
    text: "REZA. Satu-satunya cara: temukan dan perbaiki bug di kode yang dirusak. Kamu developer, kan?",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "Iya tapi aku biasanya cuma bikin form login sama todo list...",
    background: "#1a0a0a",
    character: "reza_idle",
  },
  {
    name: "ARIA",
    text: "Kebetulan sekali. Bug yang ditanam juga levelnya seperti itu.",
    background: "#0f1a2d",
    character: "aria_idle",
  },
  {
    name: "Reza",
    text: "Itu... harusnya aku tersinggung. Tapi entah kenapa aku lega.",
    background: "#0f1a2d",
    character: "reza_idle",
  },
  {
    name: "ARIA",
    text: "Setiap jawaban salah akan mempercepat timer. Baca kode baik-baik sebelum menjawab.",
    background: "#1a0a0a",
    character: "aria_serious",
  },
  {
    name: "Reza",
    text: "*tarik napas panjang* Oke. Demi karir-ku. Demi masa depan-ku. Demi... cicilan laptopku. Ayo!",
    background: "#1a0a0a",
    character: "reza_determined",
  },
  {
    name: "SISTEM",
    text: "[ CHAPTER 1: THE SCRIPT KIDDIE ]\n[ BOM #1 AKTIF — SERVER ROOM ]",
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
  // ── CHAPTER 2: DATABASE MELTDOWN ──
  {
    stage: 5,
    title: "BOM #5 — Database Server",
    timeLimit: 55,
    code: `<?php
$conn = mysqli_connect("localhost", "root", "", "mydb");
if ($conn = false) {
    die("Koneksi gagal!");
}
echo "Koneksi berhasil!";
?>`,
    errorLine: 3,
    question: "Koneksi database selalu gagal! Pilih perbaikan yang benar:",
    answers: ["if ($conn == false)", "if ($conn === false)", "if (!$conn)"],
    correct: 2,
    explanation:
      "Gunakan !$conn untuk cek koneksi gagal. Tanda = tunggal itu assignment, bukan perbandingan!",
  },
  {
    stage: 6,
    title: "BOM #6 — Query Injection",
    timeLimit: 50,
    code: `<?php
$username = $_GET['user'];
$query = "SELECT * FROM users 
          WHERE username = '$username'";
$result = mysqli_query($conn, $query);
?>`,
    errorLine: 3,
    question: "Kode ini rentan SQL Injection! Pilih perbaikan yang benar:",
    answers: [
      "WHERE username = $username",
      "$username = mysqli_real_escape_string($conn, $_GET['user'])",
      "WHERE username LIKE '$username'",
    ],
    correct: 1,
    explanation:
      "Gunakan mysqli_real_escape_string() untuk mencegah SQL Injection!",
  },
  {
    stage: 7,
    title: "BOM #7 — API Route",
    timeLimit: 45,
    code: `<?php
function getUser($id) {
    global $conn;
    $query = "SELECT * FROM users WHERE id = $id";
    $result = mysqli_query($conn, $query);
    return mysqli_fetch_assoc($result)
}
?>`,
    errorLine: 6,
    question: "Ada syntax error! Pilih perbaikan yang benar:",
    answers: [
      "return mysqli_fetch_assoc($result);",
      "return mysqli_fetch_array($result)",
      "return $result;",
    ],
    correct: 0,
    explanation: "Kurang titik koma (;) di akhir baris return!",
  },
  {
    stage: 8,
    title: "BOM #8 — Database Final",
    timeLimit: 40,
    code: `<?php
$query = "SELECT * FROM products";
$result = mysqli_query($conn, $query);
while ($row = mysqli_fetch_assoc($result)); {
    echo $row['name'];
}
?>`,
    errorLine: 4,
    question: "Loop tidak berjalan! Pilih perbaikan yang benar:",
    answers: [
      "while ($row == mysqli_fetch_assoc($result)) {",
      "while ($row = mysqli_fetch_assoc($result)) {",
      "foreach ($result as $row) {",
    ],
    correct: 1,
    explanation:
      "Ada titik koma (;) setelah while — itu membuat loop langsung berhenti sebelum jalan!",
  },
  // ── CHAPTER 3: MOBILE OVERRIDE ──
  {
    stage: 9,
    title: "BOM #9 — Mobile Core",
    timeLimit: 45,
    code: `public class User {
    String name;
    
    public String getName() {
        return name;
    }
}

User user = null;
System.out.println(user.getName());`,
    errorLine: 11,
    question: "Ada NullPointerException! Pilih perbaikan yang benar:",
    answers: [
      "User user = new User();",
      "System.out.println(user);",
      "if (user != null) System.out.println(user.getName());",
    ],
    correct: 2,
    explanation: "Harus cek null dulu sebelum memanggil method dari object!",
  },
  {
    stage: 10,
    title: "BOM #10 — OOP Logic",
    timeLimit: 40,
    code: `public class Animal {
    public void speak() {
        System.out.println("...");
    }
}

public class Dog extends Animal {
    public void speak() {
        System.out.println("Woof!");
    }
}

Animal a = new Animal();
a.speak();`,
    errorLine: 13,
    question: "Harusnya Dog yang bicara! Pilih perbaikan yang benar:",
    answers: [
      "Animal a = new Dog();",
      "Dog a = new Animal();",
      "Animal a = new Animal(Dog);",
    ],
    correct: 0,
    explanation:
      "Gunakan polymorphism — Animal a = new Dog() agar method Dog yang dipanggil!",
  },
  {
    stage: 11,
    title: "BOM #11 — Kotlin State",
    timeLimit: 35,
    code: `var isLoggedIn: Boolean
    
fun checkLogin() {
    if (isLoggedIn) {
        println("Welcome!")
    }
}`,
    errorLine: 1,
    question: "Variable belum diinisialisasi! Pilih perbaikan yang benar:",
    answers: [
      "var isLoggedIn: Boolean = false",
      "var isLoggedIn = Boolean()",
      "val isLoggedIn: Boolean",
    ],
    correct: 0,
    explanation:
      "Variable harus diinisialisasi dengan nilai awal sebelum digunakan!",
  },
  {
    stage: 12,
    title: "BOM #12 — Mobile Final",
    timeLimit: 30,
    code: `fun hitungDiskon(harga: Int, diskon: Int): Int {
    val hasil = harga - (harga * diskon / 100)
    return hasil
}

println(hitungDiskon(100, 150))`,
    errorLine: 5,
    question: "Diskon bisa lebih dari harga! Pilih perbaikan yang benar:",
    answers: [
      "if (diskon > 100) return 0",
      "val hasil = harga * diskon / 100",
      "if (diskon in 0..100) val hasil = harga - (harga * diskon / 100)",
    ],
    correct: 0,
    explanation: "Harus validasi diskon tidak melebihi 100% sebelum dihitung!",
  },
  // ── CHAPTER 4: CORE FRAME (BOSS) ──
  {
    stage: 13,
    title: "💀 BOSS #1 — Sorting Algorithm",
    language: "python",
    timeLimit: 25,
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j] = arr[j+1]
                arr[j+1] = arr[j]
    return arr`,
    errorLine: 6,
    question: "Swap tidak berfungsi! Pilih perbaikan yang benar:",
    answers: [
      "arr[j], arr[j+1] = arr[j+1], arr[j]",
      "arr[j] == arr[j+1]",
      "temp = arr[j]; arr[j] = arr[j+1]",
    ],
    correct: 0,
    explanation:
      "Gunakan tuple swap Python — arr[j], arr[j+1] = arr[j+1], arr[j]!",
  },
  {
    stage: 14,
    title: "💀 BOSS #2 — Binary Search",
    language: "python",
    timeLimit: 20,
    code: `def binary_search(arr, target):
    left, right = 0, len(arr)
    while left < right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid
        else:
            right = mid
    return -1`,
    errorLine: 8,
    question: "Infinite loop! Pilih perbaikan yang benar:",
    answers: ["left = mid + 1", "left = mid - 1", "left = mid * 2"],
    correct: 0,
    explanation: "left harus mid + 1 bukan mid, supaya tidak infinite loop!",
  },
  {
    stage: 15,
    title: "💀 BOSS #3 — Linked List",
    language: "python",
    timeLimit: 20,
    code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head == new_node
            return`,
    errorLine: 13,
    question: "Node tidak tersimpan! Pilih perbaikan yang benar:",
    answers: [
      "self.head = new_node",
      "self.head += new_node",
      "self.head is new_node",
    ],
    correct: 0,
    explanation:
      "Gunakan = bukan == untuk assignment! == itu perbandingan bukan penugasan!",
  },
  {
    stage: 16,
    title: "💀 BOSS FINAL — Ahmad's Last Code",
    language: "python",
    timeLimit: 15,
    code: `def cari_gaji(karyawan, nama):
    for i in range(len(karyawan)):
        if karyawan[i]['nama'] = nama:
            return karyawan[i]['gaji']
    return None

data = [{'nama': 'Ahmad', 'gaji': 0}]
print(cari_gaji(data, 'Ahmad'))`,
    errorLine: 3,
    question: "💀 BOSS FINAL! Bug terakhir Ahmad. Pilih perbaikan yang benar:",
    answers: [
      "if karyawan[i]['nama'] == nama:",
      "if karyawan[i]['nama'] != nama:",
      "if karyawan[i] == nama:",
    ],
    correct: 0,
    explanation:
      "= adalah assignment, == adalah perbandingan. Bug klasik Ahmad!",
  },
];

const ariaTransitions = [
  // Setelah Stage 1
  [
    "BOM #1 berhasil dijinakkan. Bagus, kamu tidak seburuk yang aku bayangkan.",
    "Tapi ada yang aneh... bom ini terlalu rapi. Seperti dibuat orang yang tahu sistem ini dari dalam.",
    "Aku cek log akses. Kamu lanjut ke BOM #2 — Control Panel, lantai 7. Cepat.",
  ],
  // Setelah Stage 2
  [
    "BOM #2 selesai. Aku sudah recover sebagian log akses.",
    "Ada satu ID yang masuk ke server room jam 22:30. ID: AGP-099.",
    "AGP... A... Ahmad? Ahmad dari divisi intern itu?",
    "Jangan jump to conclusion dulu. Lanjut ke BOM #3 — Power Core, basement.",
  ],
  // Setelah Stage 3
  [
    "BOM #3 selesai. Tapi ada transmisi masuk dari terminal tidak dikenal...",
    "[ AHMAD — via intercom ]: ...halo, Mas Reza.",
    "[ Reza ]: AHMAD?! KAMU YANG LAKUIN INI SEMUA?!",
    "[ AHMAD ]: Mas... aku udah 3 bulan belum digaji.",
    "[ Reza ]: ...hah?",
    "[ AHMAD ]: Udah nanya HRD 5 kali. Di-read doang. Mau resign malah diminta bayar biaya training.",
    "[ ARIA ]: ...secara teknis, aku paham frustrasinya.",
    "[ Reza ]: ARIA JANGAN BELA DIA—",
    "[ AHMAD ]: Jinakkan bom terakhir aja Mas. Aku mau nyerah. Tapi tolong bantuin urusan gaji aku ya.",
    "[ Reza ]: ...oke Ahmad. Janji. Tapi abis ini kita ngobrol panjang.",
  ],
  // Setelah Stage 4 → masuk Chapter 2
  [
    "BOM #4 berhasil! Chapter 1 selesai. Tapi ini belum berakhir...",
    "[ Reza ]: Hah?! Masih ada lagi?!",
    "[ ARIA ]: Sistem mendeteksi ancaman baru di layer database. Chapter 2 dimulai.",
    "[ Reza ]: Database?! Aku biasanya cuma SELECT * FROM mana-mana doang...",
    "[ ARIA ]: Itu sudah cukup. Lanjut.",
    "[ SISTEM ]: CHAPTER 2: DATABASE MELTDOWN",
  ],
  // Setelah Stage 5
  [
    "BOM #5 selesai. Koneksi database aman.",
    "[ Reza ]: Eh ARIA, ini Ahmad beneran yang lakuin semua ini?",
    "[ ARIA ]: Log menunjukkan demikian. Tapi fokus dulu — masih ada 3 bom lagi.",
    "[ Reza ]: ...oke. Lanjut.",
  ],
  // Setelah Stage 6
  [
    "SQL Injection berhasil dicegah. Bagus.",
    "[ Reza ]: Jujur aku baru tau SQL Injection itu bahaya banget.",
    "[ ARIA ]: Selamat datang di dunia backend. Lanjut ke API Route.",
  ],
  // Setelah Stage 7
  [
    "API Route aman. Satu bom lagi di Chapter 2.",
    "[ Reza ]: Aku capek ARIA... udah berapa jam ini?",
    "[ ARIA ]: 47 menit. Kamu baik-baik saja untuk ukuran orang yang biasanya cuma bikin todo list.",
    "[ Reza ]: ...itu pujian atau hinaan?",
    "[ ARIA ]: Dua-duanya. Fokus.",
  ],
  // Setelah Stage 8 → Chapter 3
  [
    "Chapter 2 selesai. Database aman.",
    "[ Reza ]: Aku udah capek banget ARIA...",
    "[ ARIA ]: Masih ada Chapter 3. Mobile Override.",
    "[ Reza ]: MOBILE?! Aku bahkan belum pernah bikin app Android!!",
    "[ ARIA ]: Tenang. Bugnya tetap level manusia.",
    "[ SISTEM ]: CHAPTER 3: MOBILE OVERRIDE",
  ],
  // Setelah Stage 9
  [
    "NullPointerException berhasil diatasi.",
    "[ Reza ]: Null pointer itu musuh bebuyutan semua developer sumpah.",
    "[ ARIA ]: Setuju. Lanjut.",
  ],
  // Setelah Stage 10
  [
    "OOP Logic berhasil diperbaiki.",
    "[ Reza ]: Polymorphism... aku inget ini waktu kuliah tapi langsung lupa abis ujian.",
    "[ ARIA ]: Tipikal. Lanjut ke Kotlin.",
  ],
  // Setelah Stage 11
  [
    "Kotlin State berhasil diperbaiki.",
    "[ Reza ]: Kotlin itu kayak Java tapi lebih... ramah?",
    "[ ARIA ]: Fokus Reza. Satu lagi di Chapter 3.",
  ],
  // Setelah Stage 12 → Chapter 4
  [
    "Chapter 3 selesai. Ini... lebih sulit dari yang aku perkirakan.",
    "[ Reza ]: AKU JUGA.",
    "[ ARIA ]: Reza. Ini Chapter terakhir. Boss Level.",
    "[ Reza ]: ...aku mau resign.",
    "[ ARIA ]: Kamu tidak bisa. Lift mati.",
    "[ Reza ]: ...oke lanjut.",
    "[ SISTEM ]: CHAPTER 4: CORE FRAME — BOSS LEVEL",
  ],
  // Setelah Stage 13
  [
    "Bubble sort berhasil diperbaiki.",
    "[ Reza ]: Swap pake tuple... elegan juga Python ini.",
    "[ ARIA ]: Jangan terlalu senang. Masih ada 3 boss lagi.",
  ],
  // Setelah Stage 14
  [
    "Binary search fixed. Tidak ada lagi infinite loop.",
    "[ Reza ]: Infinite loop itu literally mimpi buruk aku.",
    "[ ARIA ]: Lanjut. Linked List menunggu.",
  ],
  // Setelah Stage 15
  [
    "Linked List berhasil diperbaiki.",
    "[ ARIA ]: Reza... ini Boss Final. Kode terakhir Ahmad.",
    "[ Reza ]: Kode terakhir Ahmad? Maksudnya?",
    "[ ARIA ]: Dia sengaja taruh bug di kode pencarian gaji karyawan.",
    "[ Reza ]: ...dia naruh bug di kode yang nyari gajinya sendiri?",
    "[ ARIA ]: Ya.",
    "[ Reza ]: ...ini sedih sekaligus lucu.",
    "[ SISTEM ]: BOSS FINAL — JINAKKAN BOM TERAKHIR!",
  ],
];
