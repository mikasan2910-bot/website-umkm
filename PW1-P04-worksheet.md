# PW1-P04 Evidence Worksheet

## Evidence

| ID | Praktik/tugas | Bukti | Hasil |
| --- | --- | --- | --- |
| PW1-P04-E01 | Navigasi lima halaman | `index.html`, `tentang.html`, `produk.html`, `galeri.html`, dan `kontak.html` masing-masing memiliki satu link Kontak dan satu `aria-current="page"`. | Lulus |
| PW1-P04-E02 | Label dan kontrol | Semua kontrol, termasuk radio topik dan waktu kontak, memiliki `id` unik dan label dengan `for` yang cocok. | Lulus |
| PW1-P04-E03 | Tipe input dan validasi | Nama memakai `type="text"`, `required`, dan `minlength="3"`; email memakai `type="email"`; WhatsApp memakai `type="tel"`; field wajib memakai validasi HTML relevan. | Lulus |
| PW1-P04-E04 | Grup pilihan | Select paket memakai `required` dan opsi awal bernilai kosong; topik dan waktu kontak memakai `fieldset`, `legend`, serta grup radio dengan `name` masing-masing. | Lulus |
| PW1-P04-E05 | Pesan dan submit | Pesan memakai `textarea`, `required`, dan `minlength="10"`; tombol memiliki `type="submit"` dan label tindakan yang jelas. | Lulus |
| PW1-P04-E06 | Audit focus order dan preview | Focus order diperiksa hanya dengan keyboard; Tab mengikuti urutan baca dari navigasi ke seluruh kontrol, grup radio, tombol, lalu preview. Submit valid memperbarui preview tanpa reload; tidak ada error JavaScript. | Lulus |
| PW1-P04-E07 | Checkpoint Git | Commit implementasi awal `454fcc9` — `feat: tambah form kontak aksesibel dan preview`; commit worksheet awal `d50f36a` — `docs: catat evidence praktikum P04`; checkpoint preferensi kontak P04-04 `9ce5d9b` — `feat: tambah preferensi kontak P04`. | Lulus |

## Hasil validasi

- Semua lima halaman dapat dibuka dan memiliki navigasi Kontak.
- Selector `#form-kontak` dan `#preview-form` terhubung ke elemen yang benar.
- Email menggunakan `type="email"`; nomor WhatsApp menggunakan `type="tel"` dan memiliki teks bantuan terkait.
- Semua kontrol memiliki label eksplisit melalui pasangan `for`/`id`; kedua grup pilihan memiliki `fieldset` dan `legend`.
- Key `FormData` cocok dengan atribut `name` pada setiap kontrol.
- Validasi browser native berjalan tanpa JavaScript sebagai validator utama.
- Preview menggunakan `textContent` dan diperbarui tanpa reload.
- Editor tidak melaporkan error pada file P04; `git diff --check` lulus.
