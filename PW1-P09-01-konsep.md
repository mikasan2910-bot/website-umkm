# PW1-P09-01: JavaScript Fundamental dan Data

P09 membuka paruh kedua mata kuliah: dari website yang sudah rapi secara HTML/CSS menuju website yang mulai hidup dengan JavaScript. Setelah P07 dan P08, proyek Website Profil UMKM sudah memiliki struktur, tampilan, responsivitas, dan evidence pra-JavaScript. Sekarang data produk, status stok, promo, dan ringkasan katalog tidak lagi ditulis berulang secara manual di HTML, tetapi mulai dikelola sebagai data.

**Durasi:** sekitar 35 menit | **Jenis unit:** konsep, demonstrasi, dan contoh ringkas

Unit konsep ini digunakan sekitar 35 menit. Setelah memahami bagian ini, lanjutkan ke **P09-02** untuk praktik menulis `js/app.js` dari awal.

## Fokus Sub-CPMK06.1.1

Mahasiswa mampu menggunakan variabel, operator, conditional, array, object, dan data lokal untuk membuat interaksi JavaScript dasar pada proyek Website Profil UMKM.

## Capaian Pembelajaran

Setelah menyelesaikan unit ini, mahasiswa mampu:

1. menjelaskan peran JavaScript pada website sisi klien;
2. membedakan `const` dan `let` dalam konteks data proyek;
3. memodelkan produk UMKM sebagai object;
4. menyimpan kumpulan produk dalam array;
5. memakai operator dan template literal untuk menyusun teks dinamis;
6. menggunakan conditional untuk menentukan status stok atau promo;
7. membaca error dasar melalui Console DevTools;
8. menjelaskan batas P09: data lokal dan rendering sederhana, belum event kompleks atau `localStorage`.

## Mengapa JavaScript Masuk Setelah HTML/CSS?

HTML menjawab “apa struktur kontennya?”. CSS menjawab “bagaimana konten itu tampil?”. JavaScript menjawab “bagaimana halaman bereaksi terhadap data dan tindakan pengguna?”.

Contoh kebutuhan UMKM:

- menampilkan daftar produk dari satu sumber data;
- memberi label “Stok terbatas” ketika jumlah stok rendah;
- menghitung total produk aktif;
- menyembunyikan produk yang belum tersedia;
- mengubah pesan halaman tanpa menulis ulang HTML secara manual.

JavaScript tidak menggantikan HTML dan CSS. JavaScript membaca struktur yang sudah ada, mengolah data, lalu memperbarui bagian tertentu dengan DOM.

## Cara Memasang JavaScript

Untuk P09, gunakan file eksternal agar kode mudah dirawat:

```html
<script src="js/app.js" defer></script>
```

Letakkan sebelum penutup `<head>` atau sebelum penutup `<body>`. Atribut `defer` membuat script dieksekusi setelah HTML selesai diparse, sehingga elemen yang akan dipilih JavaScript sudah tersedia.

Struktur folder yang disarankan:

```text
website-umkm/
├── index.html
├── produk.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

## `const` dan `let`

Gunakan `const` untuk nilai yang binding-nya tidak diganti:

```js
const namaToko = "Kopi Nusa";
const biayaKemasan = 2000;
```

Gunakan `let` ketika nilainya memang berubah:

```js
let jumlahProdukAktif = 0;
jumlahProdukAktif = jumlahProdukAktif + 1;
```

Kebiasaan baik: mulai dengan `const`. Ubah ke `let` hanya jika perlu reassignment.

## Object: Satu Produk sebagai Satu Entitas

Object menyimpan beberapa informasi yang saling berkaitan:

```js
const produkUtama = {
  nama: "Arabika Gayo",
  harga: 85000,
  stok: 12,
  kategori: "Kopi",
  unggulan: true,
};
```

Nilai diakses dengan dot notation:

```js
console.log(produkUtama.nama);
console.log(produkUtama.harga);
```

Model data harus memakai nama properti yang konsisten. Jangan mencampur `namaProduk`, `productName`, dan `judul` untuk konsep yang sama.

## Array: Kumpulan Produk

Array menyimpan beberapa object produk:

```js
const daftarProduk = [
  { nama: "Arabika Gayo", harga: 85000, stok: 12 },
  { nama: "Robusta Temanggung", harga: 65000, stok: 4 },
  { nama: "Paket Seduh", harga: 125000, stok: 0 },
];
```

Pada P09, array cukup dipakai sebagai data lokal. Method lanjutan seperti `map`, `filter`, dan `find` akan dibahas lebih dalam pada P10. Di P09, Anda boleh memakai `for...of` agar alur data mudah dibaca.

## Operator JavaScript yang Dipakai di P09

Operator adalah simbol atau kata kunci yang membuat JavaScript dapat menghitung, membandingkan, menggabungkan teks, dan mengambil keputusan. Pada P09, mahasiswa belum perlu menghafal semua operator JavaScript, tetapi harus memahami kelompok operator yang paling sering muncul ketika mengolah data produk UMKM.

### Operator aritmatika

Operator aritmatika dipakai untuk perhitungan angka.

| Operator | Arti | Contoh | Hasil |
| --- | --- | --- | --- |
| `+` | penjumlahan | `85000 + 5000` | `90000` |
| `-` | pengurangan | `12 - 2` | `10` |
| `*` | perkalian | `65000 * 2` | `130000` |
| `/` | pembagian | `120000 / 3` | `40000` |
| `%` | sisa bagi | `7 % 2` | `1` |
| `**` | pangkat | `2 ** 3` | `8` |

Contoh konteks UMKM:

```js
const hargaProduk = 85000;
const biayaKemasan = 5000;
const jumlahBeli = 2;

const hargaSatuanFinal = hargaProduk + biayaKemasan;
const subtotal = hargaSatuanFinal * jumlahBeli;
const sisaStok = 12 - jumlahBeli;

console.log(subtotal);
console.log(sisaStok);
```

Catatan penting: operator `+` juga bisa menggabungkan string. Jika salah satu operand berupa string, hasilnya bisa menjadi string.

```js
console.log(85000 + 5000); // 90000
console.log("Rp" + 85000); // "Rp85000"
```

### Operator assignment

Operator assignment dipakai untuk memberi atau memperbarui nilai variabel.

| Operator | Arti | Contoh | Setara dengan |
| --- | --- | --- | --- |
| `=` | memberi nilai | `stok = 10` | `stok = 10` |
| `+=` | tambah lalu simpan | `stok += 2` | `stok = stok + 2` |
| `-=` | kurangi lalu simpan | `stok -= 1` | `stok = stok - 1` |
| `*=` | kalikan lalu simpan | `harga *= 2` | `harga = harga * 2` |
| `/=` | bagi lalu simpan | `total /= 2` | `total = total / 2` |

Contoh:

```js
let jumlahTersedia = 0;

if (produk.stok > 0) {
  jumlahTersedia += 1;
}
```

Gunakan assignment singkat ketika sudah memahami bentuk panjangnya. Untuk awal praktikum, bentuk `jumlahTersedia = jumlahTersedia + 1` juga boleh karena lebih eksplisit.

### Operator perbandingan

Operator perbandingan menghasilkan nilai boolean: `true` atau `false`.

| Operator | Arti | Contoh |
| --- | --- | --- |
| `===` | sama nilai dan tipe | `produk.stok === 0` |
| `!==` | tidak sama nilai atau tipe | `produk.kategori !== "Kopi"` |
| `>` | lebih dari | `produk.stok > 5` |
| `>=` | lebih dari atau sama dengan | `produk.harga >= 50000` |
| `<` | kurang dari | `produk.stok < 5` |
| `<=` | kurang dari atau sama dengan | `produk.stok <= 5` |

Biasakan memakai `===` dan `!==`, bukan `==` dan `!=`, agar JavaScript tidak melakukan konversi tipe diam-diam.

```js
console.log(0 == "0"); // true, karena tipe dikonversi
console.log(0 === "0"); // false, karena number dan string berbeda
```

### Operator logika

Operator logika menggabungkan beberapa kondisi.

| Operator | Nama | Makna |
| --- | --- | --- |
| `&&` | AND | benar jika semua kondisi benar |
| `||` | OR | benar jika setidaknya satu kondisi benar |
| `!` | NOT | membalik nilai boolean |

Contoh:

```js
const stokAman = produk.stok > 5;
const hargaPremium = produk.harga >= 100000;
const layakDitonjolkan = stokAman && hargaPremium;

const perluPerhatian = produk.stok === 0 || produk.stok <= 5;
const bukanKopi = produk.kategori !== "Kopi";
```

Operator logika membantu membuat keputusan yang lebih realistis. Misalnya produk dapat diberi label unggulan hanya jika stok tersedia dan harga berada pada kategori tertentu.

### Operator string dan template literal

String dapat digabung dengan `+`, tetapi untuk HTML dinamis lebih rapi memakai template literal.

```js
const ringkasanManual = produk.nama + " tersedia dengan harga " + produk.harga;
const ringkasanTemplate = `${produk.nama} tersedia dengan harga ${produk.harga}`;
```

Template literal memakai backtick dan interpolation `${...}`. Pada P09, template literal dipakai untuk menyusun kartu produk.

```js
const kartuProduk = `
  <article class="js-product-card">
    <h3>${produk.nama}</h3>
    <p>${produk.kategori}</p>
  </article>
`;
```

Untuk format rupiah, gunakan `Intl.NumberFormat`.

```js
const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

console.log(formatRupiah.format(85000)); // Rp85.000
```

### Nullish coalescing dan optional chaining

Dua operator modern ini membantu membaca data yang belum lengkap. `??` disebut nullish coalescing. Ia memberi nilai cadangan hanya ketika nilai kiri adalah `null` atau `undefined`.

```js
const labelKategori = produk.kategori ?? "Tanpa kategori";
```

`?.` disebut optional chaining. Ia membaca properti secara aman ketika object mungkin belum tersedia.

```js
const namaPromo = produk.promo?.nama ?? "Belum ada promo";
```

Contoh ini berguna ketika data produk belum seragam. Namun jangan dipakai untuk menutupi model data yang asal-asalan. Jika semua produk wajib punya nama, harga, dan stok, properti itu tetap harus ditulis lengkap.

## Conditional: Keputusan Berdasarkan Data

Conditional membuat halaman merespons nilai data. Pada proyek UMKM, conditional dipakai untuk status stok, promo, kategori unggulan, atau pesan ringkasan.

### `if`, `else if`, dan `else`

Gunakan `if` ketika logika memiliki beberapa cabang dan butuh dibaca jelas.

```js
let statusStok = "Tersedia";
let kelasStatus = "";

if (produk.stok === 0) {
  statusStok = "Habis";
  kelasStatus = "empty";
} else if (produk.stok <= 5) {
  statusStok = "Stok terbatas";
  kelasStatus = "warning";
} else {
  statusStok = "Tersedia";
  kelasStatus = "";
}
```

Urutan kondisi penting. Cek `stok === 0` sebelum `stok <= 5`, karena `0` juga memenuhi `<= 5`.

### Ternary operator

Ternary adalah conditional singkat dengan pola:

```js
kondisi ? nilaiJikaBenar : nilaiJikaSalah;
```

Gunakan ternary untuk keputusan pendek yang mudah dibaca.

```js
const labelKetersediaan = produk.stok > 0 ? "Bisa dipesan" : "Belum tersedia";
const kelasKartu = produk.unggulan ? "card featured" : "card";
```

Jangan memaksakan ternary untuk logika panjang. Jika cabangnya lebih dari dua atau membutuhkan beberapa aksi, gunakan `if`.

### `switch`

`switch` cocok ketika keputusan bergantung pada satu nilai kategori.

```js
let labelKategori = "";

switch (produk.kategori) {
  case "Kopi":
    labelKategori = "Produk kopi pilihan";
    break;
  case "Bundling":
    labelKategori = "Paket hemat";
    break;
  default:
    labelKategori = "Produk UMKM";
}
```

Pada P09, `switch` tidak wajib dipakai dalam praktikum inti, tetapi mahasiswa perlu mengenal kapan bentuk ini lebih rapi daripada rangkaian `if...else if`.

### Truthy dan falsy

JavaScript dapat memperlakukan nilai non-boolean sebagai benar atau salah dalam conditional. Nilai yang dianggap falsy antara lain `false`, `0`, `""`, `null`, `undefined`, dan `NaN`.

```js
if (produk.deskripsi) {
  console.log(produk.deskripsi);
} else {
  console.log("Deskripsi belum tersedia.");
}
```

Untuk angka seperti stok, hati-hati. `0` adalah falsy, tetapi `0` adalah data yang bermakna: stok habis. Karena itu, kondisi stok lebih baik ditulis eksplisit.

```js
if (produk.stok) {
  console.log("Ada stok");
}

if (produk.stok > 0) {
  console.log("Ada stok");
}
```

Kondisi pertama kurang tepat untuk stok karena `0` langsung dianggap `false`; kondisi kedua lebih jelas.

## DOM secara Singkat

DOM adalah representasi dokumen HTML yang dapat dibaca dan diubah JavaScript.

```js
const daftarProdukEl = document.querySelector("#daftar-produk");
daftarProdukEl.innerHTML = "<p>Produk siap ditampilkan.</p>";
```

Pada P09, DOM dipakai secara terbatas untuk:

- memilih elemen target;
- menyusun HTML dari data lokal;
- menampilkan ringkasan sederhana.

Event handling mendalam dibahas pada P11.

## Debugging dengan Console DevTools

Gunakan Console untuk membaca alur program.

```js
console.log("Jumlah produk:", daftarProduk.length);
console.table(daftarProduk);
```

Jika muncul error, baca dari atas:

- jenis error, misalnya `ReferenceError` atau `TypeError`;
- nama file, misalnya `app.js`;
- nomor baris;
- nilai variabel yang terlibat.

Jangan menghapus `console.log` terlalu cepat. Pada fase belajar, log adalah alat berpikir.

## Batas Materi

P09 belum menuntut:

- event listener kompleks;
- validasi form JavaScript;
- `localStorage`;
- Fetch API;
- framework atau library.

Kita sengaja menjaga lingkup kecil agar mahasiswa memahami data, kondisi, dan DOM target sebelum masuk interaksi yang lebih kaya.

## Persiapan ke Praktikum

Sebelum masuk P09-02, pastikan:

- proyek P07/P08 bersih di Git;
- halaman produk sudah memiliki container yang bisa menjadi target render;
- browser DevTools dapat dibuka;
- folder `js/` belum berisi kode yang tidak dipahami.

Jika sudah siap, lanjutkan ke **P09-02** untuk membuat `js/app.js` dan menghubungkannya ke proyek.