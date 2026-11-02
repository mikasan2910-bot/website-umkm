# PW1-P10-04 - Worksheet Evidence Praktikum dan Tugas Mandiri P10

## Identitas

- Nama: Sani
- NIM: 60225062
- Kelas: PEMOGRAMAN WEB I-B
- Proyek: Kopi Bangsa - Website UMKM
- Tanggal pengerjaan: 2 November 2026

## Tujuan dan Batasan

Refactor katalog P09 menjadi function kecil dan rendering DOM yang lebih mudah dibaca, diuji, serta di-debug. Praktik ini tidak menambahkan event filter interaktif, localStorage, Fetch API, atau validasi form JavaScript.

## Evidence PW1-P10-E01 sampai E08

| ID | Evidence dan catatan | Hasil |
| --- | --- | --- |
| PW1-P10-E01 | Audit baseline: versi sebelum refactor tersedia pada commit `1a59ff9` (`js/app.js` masih memakai satu loop render panjang). Bagian yang dipecah: formatter rupiah, status stok, markup kartu, seleksi produk tersedia/unggulan, dan render DOM. Pembanding: `git show 1a59ff9:js/app.js`. | Dicatat |
| PW1-P10-E02 | Array of object final ada di `js/app.js` sebagai `produkUmkm`, berisi empat item dengan properti konsisten `nama`, `kategori`, `harga`, `stok`, `unggulan`, dan `deskripsi`; `diskonPersen` opsional untuk item promo. | Lulus |
| PW1-P10-E03 | Function contract `formatRupiah(nilai)`: input angka, return string rupiah, tanpa mengubah DOM. Console aktual: `Contoh format rupiah: Rp 85.000`. | Lulus |
| PW1-P10-E04 | `statusStok(stok)` mengembalikan object `{ label, className }`. Hasil uji: `0` dan `-1` menghasilkan `Habis/empty`; `3` menghasilkan `Stok terbatas/warning`; `12` menghasilkan `Tersedia/`. | Lulus |
| PW1-P10-E05 | `buatKartuProduk(produk)` menerima satu object, mengembalikan HTML string kartu, dan menggunakan function status, formatter, kategori, serta formatter harga promo. Uji promo: harga Rp100.000 dengan diskon 10% menghasilkan harga Rp90.000 dan catatan diskon 10%. | Lulus |
| PW1-P10-E06 | `filter` memilih stok `> 0` (3 dari 4 item), `find` memilih unggulan pertama `Arabika Gayo`, `map(buatKartuProduk)` menghasilkan markup, lalu `join("")` menyatukan markup. Ringkasan kategori: `Kopi: 3 produk, Bundling: 1 produk`. | Lulus |
| PW1-P10-E07 | `forEach` pertama dipakai sengaja untuk log inspeksi per produk, bukan membangun markup. Console menampilkan nama dan stok keempat produk; `console.table(produkUmkm)` menampilkan empat object. `forEach` kedua mengakumulasi jumlah kategori ke object lokal. | Lulus |
| PW1-P10-E08 | Halaman Produk menampilkan tiga kartu tersedia, ringkasan `3 produk tersedia dari 4 data.`, unggulan Arabika Gayo, dan ringkasan kategori. Screenshot render: [produk-render.png](assets/images/produk-render.png). Browser tidak melaporkan Console error dan halaman tidak overflow horizontal. | Lulus |

## Temuan Breakpoint DevTools

- File: `js/app.js`
- Function: `renderProduk`
- Breakpoint dipasang pada baris 116, sesudah nilai hasil `filter` dan `find` dibuat.
- `produkTersedia.map((item) => item.nama)`: `Arabika Gayo`, `Robusta Temanggung`, `Kopi Lereng Pekalongan`.
- `produkUnggulan.nama`: `Arabika Gayo`.
- Target `grid`, `ringkasan`, `unggulan`, dan `ringkasanKategori`: semuanya element yang ditemukan (`true`).
- Temuan: `Paket Seduh` tidak masuk ke hasil `produkTersedia` karena stoknya 0; pencarian unggulan memilih object pertama dengan `unggulan: true`.

## Function dan Array Methods

- `formatRupiah(nilai)` memformat satu angka ke teks IDR, misalnya `85000` menjadi `Rp 85.000`.
- `statusStok(stok)` menentukan label dan class stok dalam satu tanggung jawab.
- `buatKartuProduk(produk)` mengubah object produk menjadi markup HTML.
- `renderProduk()` melakukan query DOM, guard target, memilih data, lalu memperbarui target DOM.
- `filter` tidak memutasi array sumber; `map` membentuk array markup; `find` mencari satu item dan hasilnya dicek sebelum properti nama dipakai.
- `forEach` dipilih untuk inspeksi/debug per item dan akumulasi hitungan kategori ke object sederhana. `reduce` tidak wajib untuk tugas ini karena alur akumulasi eksplisit lebih mudah dibaca pemula dan tidak membutuhkan nilai reduce yang lebih kompleks.

## Verifikasi Halaman dan Console

| Halaman | Memuat `js/app.js` | Hasil Console |
| --- | --- | --- |
| `produk.html` | Ya | Tidak ada error atau warning; log formatter, empat log debug, dan satu tabel data tampil. |
| `index.html` | Ya | Tidak ada error. Ada warning `Target render produk belum lengkap.` yang memang berasal dari guard karena halaman Beranda tidak memiliki target katalog; render halaman tetap normal. |
| Halaman lain | Tidak | `app.js` tidak dimuat pada `tentang.html`, `galeri.html`, dan `kontak.html`. |

Pemeriksaan tambahan: `node --check js/app.js`, `git diff --check`, render browser produk, promo, empat keadaan stok, serta breakpoint DevTools berhasil.

## Challenge Ringkasan Kategori

Output yang tampil: **Kopi: 3 produk, Bundling: 1 produk**. Ringkasan dibuat dari daftar produk asli menggunakan `forEach`; array sumber tidak diubah.

## Commit P10

- Commit implementasi P10: `74fb762ed4c2adaa2d93ff7e4f65d3127f8515ed`
- Pesan commit: `refactor: complete P10 product catalog functions and array methods`
- Status Git: akan diverifikasi kembali setelah worksheet evidence ini di-commit.

## Batas Scope

Tidak ada event filter interaktif, localStorage, Fetch API, atau validasi form JavaScript baru. Layout besar responsif P07 dipertahankan; CSS hanya memakai style yang sudah ada.
