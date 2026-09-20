# PW1-P03 Evidence Worksheet

## Evidence

| ID | Praktik/tugas | Bukti | Hasil |
| --- | --- | --- | --- |
| PW1-P03-E01 | Navigasi empat halaman | `index.html`, `tentang.html`, `produk.html`, dan `galeri.html` saling menautkan Beranda, Tentang Kami, Produk, dan Galeri. | Lulus |
| PW1-P03-E02 | Figure, figcaption, dan alt | `galeri.html` memuat tiga `figure.media-card`; setiap gambar informatif memiliki alt dan setiap figure memiliki figcaption yang memberi konteks tambahan. | Lulus |
| PW1-P03-E03 | Media | `galeri.html` memuat `proses-seduh.svg`, dua varian produk melalui `srcset`, serta audio dengan `controls`, deskripsi, dan fallback tanpa autoplay. | Lulus |
| PW1-P03-E04 | Struktur tabel | `produk.html` memakai `table > caption + thead/tbody`, header kolom `scope="col"`, dan header baris `scope="row"`. | Lulus |
| PW1-P03-E05 | Audit aksesibilitas | Produk baru memakai alt informatif yang tidak menyalin figcaption mentah. Nama, ukuran, harga, dan keterangan produk konsisten antara galeri dan tabel. | Lulus |
| PW1-P03-E06 | Checkpoint Git | Commit P03 dibuat setelah validasi final. Hash dicatat di bawah setelah commit. | Lulus |

## Asset dan izin

`produk-kopi-640.svg` dan `produk-kopi-960.svg` adalah ilustrasi SVG buatan sendiri untuk pembelajaran; metadata sumber/izin dicantumkan di masing-masing file. `proses-seduh.svg` juga dibuat sendiri dari bentuk SVG sederhana.

## Perbandingan ukuran gambar

`srcset` pada produk memilih versi 640w atau 960w sesuai kebutuhan viewport. Kedua file mempertahankan rasio 16:9 dan hanya memakai asset SVG buatan sendiri, sehingga tidak bergantung pada asset berhak cipta pihak lain.

## Hasil validasi

- Halaman dan target navigasi tersedia.
- Produk baru: Kopi Lereng Pekalongan, 250 gram, Rp32.000.
- Tidak ada `kontak.html` atau link Kontak pada navigasi P03.
- Tabel memuat caption, thead, tbody, th, dan scope.
- CSS P03 hanya menambahkan keterbacaan media/tabel; tidak memakai Flexbox/Grid.

## Commit P03

- Hash: dicatat pada checkpoint Git setelah commit.
- Pesan: `feat: tambah media dan tabel katalog`
