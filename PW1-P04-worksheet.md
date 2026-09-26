# PW1-P04 Evidence Worksheet

## Evidence

| ID | Praktik/tugas | Bukti | Hasil |
| --- | --- | --- | --- |
| PW1-P04-E01 | Navigasi lima halaman | `index.html`, `tentang.html`, `produk.html`, `galeri.html`, dan `kontak.html` masing-masing memiliki satu link Kontak dan satu `aria-current="page"`. | Lulus |
| PW1-P04-E02 | Label dan kontrol | Setiap kontrol form memiliki label terkait melalui `for`/`id` atau label pembungkus pada pilihan radio. | Lulus |
| PW1-P04-E03 | Nama dan email | Nama memakai `type="text"`, `required`, dan `minlength="3"`; email memakai `type="email"` dan `required`. | Lulus |
| PW1-P04-E04 | Paket dan topik | Select paket memakai `required` dan opsi awal bernilai kosong; radio topik memakai `fieldset`, `legend`, dan satu `name` yang sama. | Lulus |
| PW1-P04-E05 | Pesan dan submit | Pesan memakai `textarea`, `required`, dan `minlength="10"`; tombol memiliki `type="submit"` dan label tindakan yang jelas. | Lulus |
| PW1-P04-E06 | Validasi, focus order, dan preview | Browser menolak form kosong serta data nama/email/pesan tidak valid. Tab bergerak dari skip link dan navigasi ke nama, email, paket, grup radio, pesan, lalu tombol. Submit valid memperbarui preview tanpa mengubah URL; tidak ada error JavaScript. | Lulus |
| PW1-P04-E07 | Checkpoint Git | Commit implementasi `454fcc9` — `feat: tambah form kontak aksesibel dan preview`. Setelah commit implementasi, `git status --short` hanya menampilkan `?? PW1-P04-01-konsep.md`, file materi konsep yang sudah ada sebelum pekerjaan P04 ini. | Lulus |

## Hasil validasi

- Semua lima halaman dapat dibuka dan memiliki navigasi Kontak.
- Selector `#form-kontak` dan `#preview-form` terhubung ke elemen yang benar.
- Key `FormData` cocok dengan atribut `name` pada setiap kontrol.
- Validasi browser native berjalan tanpa JavaScript sebagai validator utama.
- Preview menggunakan `textContent` dan diperbarui tanpa reload.
- Editor tidak melaporkan error pada file P04; `git diff --check` lulus.
