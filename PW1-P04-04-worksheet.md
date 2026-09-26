# PW1-P04-04: Tugas dan Worksheet Form HTML dan Accessibility

## Briefing Tugas

Lengkapi halaman `kontak.html` dari praktikum P04-02 dengan preferensi kontak. Fokus tugas adalah form HTML semantik, nama kontrol yang jelas, validasi native, dan urutan fokus yang dapat diikuti menggunakan keyboard.

JavaScript hanya digunakan untuk menampilkan preview ringan dari data yang diisi. Pengelolaan data dan strategi validasi interaktif lanjutan tidak termasuk cakupan P04.

## Tugas

1. Tambahkan field nomor WhatsApp menggunakan `input type="tel"` dan label spesifik.
2. Tambahkan grup pilihan waktu kontak menggunakan `fieldset` dan `legend`.
3. Pastikan setiap kontrol memiliki label yang terhubung melalui pasangan `for` dan `id`.
4. Gunakan tipe input serta validation attribute HTML yang sesuai. Email menggunakan `type="email"`; field wajib diberi `required` dan batas minimum yang relevan jika diperlukan.
5. Pastikan preview menampilkan nilai baru tanpa reload dan tidak mengambil alih validasi browser.
6. Uji urutan fokus hanya dengan keyboard dari navigasi hingga tombol submit.

## Challenge

Tambahkan teks bantuan singkat untuk satu field, hubungkan dengan kontrol menggunakan `aria-describedby`, dan pertahankan label yang spesifik. Pastikan bantuan menjelaskan format atau konteks, bukan menggantikan label.

## Checklist Pengujian

- [ ] Kelima halaman memiliki navigasi yang konsisten dan satu `aria-current="page"`.
- [ ] Setiap kontrol memiliki label spesifik dengan pasangan `for`/`id` yang cocok.
- [ ] Email memakai `type="email"` dan WhatsApp memakai `type="tel"`.
- [ ] Grup topik dan waktu kontak masing-masing memakai `fieldset` dan `legend`.
- [ ] Select, textarea, dan field wajib memakai atribut HTML yang relevan.
- [ ] Form kosong atau tidak valid ditolak oleh validasi native browser.
- [ ] Tab bergerak mengikuti urutan baca halaman dan indikator fokus terlihat.
- [ ] Submit valid memperbarui preview tanpa reload; Console bebas error.
- [ ] Perubahan dan evidence tersimpan pada checkpoint Git P04.

## Evidence Praktikum P04-02

| ID | Evidence | Bukti yang dicatat | Hasil |
| --- | --- | --- | --- |
| PW1-P04-E01 | Navigasi | Link Kontak tersedia pada Beranda, Tentang Kami, Produk, Galeri, dan Kontak; halaman aktif ditandai dengan `aria-current`. |  |
| PW1-P04-E02 | Label dan kontrol | Tunjukkan pasangan label `for` dan kontrol `id`, termasuk WhatsApp serta seluruh radio. |  |
| PW1-P04-E03 | Input type dan validasi | Tunjukkan `type="text"`, `type="email"`, `type="tel"`, `required`, dan `minlength` yang relevan. |  |
| PW1-P04-E04 | Fieldset dan legend | Tunjukkan grup topik dan waktu kontak beserta `fieldset`, `legend`, dan nama grup radio. |  |
| PW1-P04-E05 | Select, textarea, dan submit | Tunjukkan opsi awal kosong pada select, validasi textarea, serta tombol submit berlabel jelas. |  |
| PW1-P04-E06 | Audit keyboard | Catat urutan Tab dari navigasi, seluruh kontrol form, tombol, hingga preview; pastikan fokus terlihat. |  |
| PW1-P04-E07 | Commit P04 | Catat hash commit implementasi dan pastikan `git status` bersih setelah checkpoint. |  |

## Refleksi Singkat

- Kontrol mana yang memakai label eksplisit dan bagaimana pasangan `for`/`id` diperiksa?
- Apa bantuan validasi native yang diberikan browser pada form ini?
- Apakah urutan Tab sesuai urutan membaca dan alur pertanyaan?
- Bagian mana dari tugas yang hanya menggunakan JavaScript untuk preview?