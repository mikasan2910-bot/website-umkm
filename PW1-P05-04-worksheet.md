# PW1-P05-04: Tugas dan Worksheet CSS Fundamental dan Design Token

## Ringkasan Checkpoint

| Checkpoint | Commit | Catatan |
| --- | --- | --- |
| Praktikum terbimbing P05-02 | `194afa7` | Baseline, token, komponen, dan focus-visible. |
| Tugas mandiri P05-04 | `1b38901` | Tema pinus, pasangan token tambahan, dan status preview sukses. |

## Variasi Tema: Kopi Bangsa Rempah dan Madu

Tema akhir memakai terracotta dan espresso sebagai warna ajakan bertindak, dengan aksen madu pada CTA hero dan hijau untuk status sukses. Nilai fungsional warna dipusatkan pada custom properties.

| Token | Sebelum | Sesudah | Peran |
| --- | --- | --- | --- |
| `--color-primary` | `#6f3b1f` | `#a6401b` | Identitas utama, link, hero, dan tombol umum |
| `--color-primary-strong` | `#4b2715` | `#7c2d12` | Hover dan teks penekanan |
| `--color-text` | `#2f2118` | `#30231e` | Teks utama |
| `--color-muted` | `#6b5b52` | `#69574e` | Keterangan sekunder |
| `--color-surface-soft` | `#fff8f0` | `#fff7ed` | Latar halaman dan permukaan lembut |
| `--color-border` | `#dccbbc` | `#e8d4bf` | Batas kontrol dan komponen |
| `--color-focus` | `#1d4ed8` | `#005fcc` | Focus indicator |
| `--color-success` | Baru | `#216a46` | Border status submit sukses |
| `--color-success-soft` | Baru | `#e8f4eb` | Latar status submit sukses |

Token pendukung lain yang direvisi: `--color-accent`, `--color-accent-secondary`, `--color-selected-surface`, `--color-highlight`, `--color-highlight-hover`, dan `--shadow-card`. CTA umum memakai primary terracotta dengan teks putih; CTA hero memakai highlight madu dengan teks gelap.

Pasangan radius baru adalah `--radius-lg: 1.25rem` dan `--radius-xl: 1.75rem`. `--radius-lg` dipakai pada `.product-card`; `--radius-xl` dipakai pada `.hero`. Token spacing `--space-6: 2.5rem` digunakan oleh `.page` dan `.hero`.

Komponen berbeda memakai `--color-primary`: link navigasi biasa memakai warna teks primary, sedangkan latar `.hero` memakai warna primary yang sama. Nilai computed keduanya pada palet akhir adalah `rgb(166, 64, 27)`. Screenshot navigasi dan hero ditampilkan pada percakapan kerja, tetapi belum diekspor menjadi berkas gambar di repositori.

Polish visual berikutnya mengganti primary ke `#a6401b`; link navigasi dan latar hero memakai computed `rgb(166, 64, 27)`. Pemeriksaan kontras ulang mencatat rasio teks putih terhadap primary sebesar 6.23:1.

## Evidence Praktikum Terbimbing P05-02

| ID | Evidence | Hasil pemeriksaan | Status |
| --- | --- | --- | --- |
| PW1-P05-E01 | Koneksi stylesheet | Kelima halaman utama memuat satu `css/style.css`; halaman-halaman dibuka di browser. | Lulus |
| PW1-P05-E02 | Baseline dan token | `box-sizing` computed bernilai `border-box`; token warna, spacing, radius, dan shadow tersedia. | Lulus |
| PW1-P05-E03 | Sebelum dan sesudah | Screenshot sesudah tampil di sesi browser. Screenshot sebelum tidak diambil karena stylesheet sudah memiliki perubahan lokal sebelum praktikum P05-02 dimulai. Belum ada pasangan gambar yang diarsipkan. | Sebagian |
| PW1-P05-E04 | Tipografi dan komponen | Computed body memakai system font dan `1rem`; komponen hero, card, tabel, form, serta media tampil setelah refactor. Screenshot tidak diekspor sebagai berkas. | Sebagian |
| PW1-P05-E05 | Focus-visible | Tab menampilkan outline pada skip link dan input `#nama`; CSS memberi outline 3px dengan offset. | Lulus |
| PW1-P05-E06 | Styles / cascade | Aturan `button` dan `.hero button` diperiksa melalui CSSOM. Panel Styles DevTools tidak tersedia pada browser tool, jadi screenshot panel belum dilampirkan. | Sebagian |
| PW1-P05-E07 | Computed | Nilai font, `box-sizing`, radius, shadow, warna fokus, dan warna akhir tombol diperiksa melalui browser. Screenshot panel Computed DevTools belum dilampirkan. | Sebagian |
| PW1-P05-E08 | Commit praktikum | Checkpoint P05-02: `194afa7` (`feat: bangun fondasi css dan design token`). | Lulus |

## Evidence Tugas Mandiri

| Evidence | Catatan | Status |
| --- | --- | --- |
| Daftar token tema | Token warna sebelum/sesudah dan token baru tercatat pada tabel tema di atas. | Lulus |
| Dua komponen memakai token sama | Link navigasi dan hero memakai `--color-primary`; screenshot tampil di sesi, belum disimpan sebagai berkas lokal. | Sebagian |
| Keterbacaan | Rasio hasil hitung browser pada palet akhir: teks utama/latar lembut 14.28:1; primary/permukaan 6.23:1; teks putih/hero 6.23:1; muted/latar lembut 6.43:1; focus/latar lembut 5.64:1; teks tombol hero/highlight 11.76:1; success/permukaan sukses 5.78:1. | Lulus |
| Keyboard focus | Urutan Tab mencapai skip link lalu input nama; keduanya memiliki outline solid yang terlihat. | Lulus |
| Konflik cascade/specificity | Pada tombol hero, `button` menetapkan `background: var(--color-primary)` dengan specificity `(0,0,1)`. `.hero button` menetapkan `background: var(--color-highlight)` dengan specificity `(0,1,1)` dan menang. Warna computed akhir `rgb(245, 213, 140)`. Screenshot panel DevTools belum dilampirkan. | Sebagian |
| Challenge status sukses | Submit valid menampilkan teks `Preview berhasil dibuat.` dan kelas `.status-success`; token `--color-success` mengatur border, `--color-success-soft` mengatur latar. `#preview-form` tetap berupa live region sehingga status tidak disampaikan melalui warna saja. | Lulus |
| Commit tugas mandiri | `1b38901` (`feat: tambah tema token Kopi Bangsa`), terpisah dari checkpoint praktikum. | Lulus |
| Polish CTA pelanggan | Primary terracotta dan aksen madu terlihat pada navigasi, hero, serta tombol; palet diperiksa ulang untuk kontras. | Lulus |

## Regression dan Batas Materi

- Lima halaman utama memuat stylesheet; gambar galeri termuat, tabel tampil, dan audio memiliki kontrol serta tidak melaporkan error media.
- Tombol promo tetap bekerja.
- Submit form kosong ditahan validasi native; preview tidak diberi kelas sukses.
- Submit valid memperbarui preview dan menerapkan status sukses.
- Focus indicator terlihat pada link dan input form.
- Tidak ada deklarasi Flexbox, Grid, media query, atau `outline: none` di `css/style.css`.
- Diagnostik CSS/JavaScript dan `git diff --check` bersih pada pemeriksaan tugas.

## Lampiran yang Masih Dibutuhkan

Screenshot sebelum/sesudah, screenshot panel Styles/Computed DevTools, dan ekspor screenshot dua komponen belum tersimpan sebagai file lokal. Browser tool pada sesi ini hanya menyediakan screenshot halaman, bukan panel DevTools atau ekspor langsung ke workspace. Untuk pengumpulan yang mensyaratkan gambar lokal, ambil lampiran tersebut dari browser/DevTools dan tambahkan ke worksheet sebelum dikumpulkan.
