# P08-03 - Pengumpulan Proyek dan Validasi

Lesson ini digunakan untuk mengumpulkan bukti proyek final pra-JavaScript setelah CBT selesai. Bagian ini bukan presentasi. Dosen hanya memerlukan bukti ringkas bahwa proyek yang menjadi konteks CBT dapat ditelusuri dan sesuai dengan milestone P07.

## Bobot Pengumpulan

Pengumpulan proyek dan validasi berbobot **5% nilai akhir**. Bobot ini kecil karena pengembangan proyek utama sudah dimulai dan dikunci melalui tugas P07. Pada P08, pengumpulan berfungsi sebagai validasi akhir UTS.

## Identitas Mahasiswa

- Nama: Sani
- NIM: 60225062
- Kelas: PEMOGRAMAN WEB I-B
- Nama proyek: Kopi Bangsa - Website UMKM

## Informasi Proyek

- Tautan repository: https://github.com/mikasan2910-bot/website-umkm
- Status repository: Public; halaman repository berhasil dibuka.
- Commit hash final pra-JavaScript: `43481ca98a21c9b2af89d70044352261f6aef23c`
- Pesan commit: `feat: terapkan responsive mobile-first`
- Tanggal dan waktu commit: 12 Oktober 2026, 12:20:18 WIB (`+07:00`)
- Catatan batas commit: HEAD lokal `0538923` adalah perubahan setelah milestone tersebut dan menambahkan navigasi hamburger dengan JavaScript. Hash di atas dipakai sebagai baseline pra-JavaScript P07.
- Bukti `git status` bersih: `git status --porcelain` kosong setelah seluruh paket final P08 di-commit secara lokal; working tree terverifikasi bersih.

### Commit Implementasi untuk Konteks UTS

Berikut checkpoint implementasi yang menunjukkan perkembangan proyek P01-P07. Commit dokumentasi atau evidence tidak dicantumkan. Untuk pengumpulan pra-JavaScript, gunakan hash P07 sebagai commit final utama.

| Milestone | Hash | Pesan commit |
| --- | --- | --- |
| P01 - Landing page awal | `2db9124930f2f795cd42c1b5c58af941409d9921` | `feat: buat landing page awal UMKM` |
| P02 - Semantic HTML dan kontak singkat | `b40722191f58fd60db01ff13533d78f966866d6d` | `feat: tambah kontak singkat dan semantic html` |
| P03 - Media dan tabel katalog | `fb53b9e66aad2fdac3bdeb199cb6ab19154a6e2c` | `feat: tambah media dan tabel katalog` |
| P04 - Form kontak aksesibel dan preview | `1a8dd398ade9cae345cb2346cd66776fd2791de9` | `feat: tambah form kontak aksesibel dan preview` |
| P04 - Preferensi kontak | `6fb6a6681b423beb4f7b11e09c7a3f15ee981394` | `feat: tambah preferensi kontak P04` |
| P05 - Fondasi CSS dan design token | `194afa7f531af8d9563e063a67437230623f2a90` | `feat: bangun fondasi css dan design token` |
| P05 - Tema Pinus dan Gula Aren | `7e9378db2173dfb91174681db9755178b1871470` | `feat: add pinus and palm sugar P05-04 theme` |
| P06 - Layout Grid dan Flexbox | `a0b0e6b2c26ae079ccf25b47e312747304604be7` | `feat: bangun layout flexbox dan grid` |
| P07 - Responsive mobile-first (baseline final pra-JavaScript) | `43481ca98a21c9b2af89d70044352261f6aef23c` | `feat: terapkan responsive mobile-first` |

Commit lanjutan `053892374f1f603d0ac740d4d544aa1fbe762368` menambahkan hamburger navigation dengan JavaScript setelah baseline P07. Jangan gunakan sebagai commit pra-JavaScript.

## Halaman yang Diuji

Tuliskan halaman yang diperiksa dan tandai hasil pengujian.

| Halaman | Viewport/perangkat | Hasil | Catatan |
| --- | --- | --- | --- |
| Beranda (`index.html`) | Narrow, lebar CSS 320px | Lulus | Landmark `main` dan satu link aktif tersedia; tidak ada overflow horizontal. |
| Beranda (`index.html`) | Wide, lebar CSS 1440px | Lulus | Screenshot Edge headless menunjukkan navigasi desktop, hero dua kolom, dan kartu produk tiga kolom; tidak ada overflow horizontal. |
| Tentang Kami (`tentang.html`) | Narrow, lebar CSS 320px | Lulus | Landmark `main`, satu link aktif, dan tidak ada overflow horizontal. |
| Produk (`produk.html`) | Narrow, lebar CSS 320px | Lulus | Tabel harga berada dalam `.table-scroll`; halaman tidak overflow. |
| Galeri (`galeri.html`) | Narrow, lebar CSS 320px | Lulus | Landmark `main`, satu link aktif, dan tidak ada overflow horizontal. |
| Kontak (`kontak.html`) | Narrow, lebar CSS 320px | Lulus | Form ada; kontrol tetap di dalam viewport dan tidak ada overflow horizontal. Screenshot tersedia. |

## Evidence yang Dikumpulkan

- [x] Tautan repository dapat dibuka atau arsip proyek dapat diekstrak.
- [x] Commit hash final pra-JavaScript dicantumkan.
- [x] Screenshot homepage pada narrow viewport dilampirkan.
- [x] Screenshot homepage pada wide viewport dilampirkan.
- [x] Screenshot satu halaman yang memuat tabel atau form pada viewport sempit dilampirkan.
- [x] Bukti `git status` bersih dicatat dan diverifikasi setelah commit.
- [x] Catatan validasi responsive atau semantic HTML ditulis maksimal 100 kata.

Lampiran atau tautan evidence:

| Evidence | Nama file/tautan | Keterangan |
| --- | --- | --- |
| Homepage, narrow viewport | [home-narrow.png](assets/evidence/PW1-P08-03/home-narrow.png) | Lebar CSS 320px; tidak ada overflow horizontal. |
| Homepage, wide viewport | [home-wide.png](assets/evidence/PW1-P08-03/home-wide.png) | Screenshot Edge headless pada viewport 1440×1000; layout desktop terlihat dan tidak overflow. |
| Halaman form, viewport sempit | [kontak-form-narrow.png](assets/evidence/PW1-P08-03/kontak-form-narrow.png) | Lebar CSS 320px; form terlihat dan halaman tidak overflow. |
| `git status` bersih | `git status --porcelain` kosong setelah commit final lokal | Semua dokumen dan evidence final sudah di-commit; working tree bersih pada verifikasi akhir. |

## Quality Gate

Isi hasil pemeriksaan dan sertakan lokasi bukti yang sesuai.

| Area | Pemeriksaan | Hasil | Bukti/catatan |
| --- | --- | --- | --- |
| Repository | Tautan dapat dibuka atau arsip dapat diekstrak. | Lulus | Repository GitHub berstatus Public dan berhasil dibuka. |
| Commit | Commit final jelas dan sesuai waktu pengumpulan. | Lulus, perlu konfirmasi dosen | `43481ca98a21c9b2af89d70044352261f6aef23c`, commit P07 responsive mobile-first tanggal 12 Oktober 2026. HEAD lokal yang lebih baru menambahkan navigasi JavaScript. |
| HTML | Struktur semantik utama dari P02-P04 masih dipertahankan. | Lulus pada halaman yang diperiksa | Lima halaman memiliki landmark `main` dan satu link `aria-current`; form memiliki label dan fieldset, tabel memiliki caption serta header. |
| CSS | Design token, Grid/Flexbox, dan responsive rule dari P05-P07 masih ada. | Lulus | Terlihat di `css/style.css`, termasuk token, Grid/Flexbox, dan breakpoint 42rem, 48rem, serta 60rem. |
| Responsive | Tidak ada overflow horizontal tingkat halaman pada viewport sekitar 320px. | Lulus pada lima halaman | Beranda, Tentang, Produk, Galeri, dan Kontak diuji pada lebar CSS 320px tanpa overflow. |
| Evidence | Screenshot dan catatan cukup untuk memvalidasi hasil. | Lulus | Semua informasi, catatan, tiga screenshot, dan bukti status Git tercatat. |

## Catatan Validasi

Tuliskan perbaikan responsive atau semantic HTML paling penting. Maksimal 100 kata.

> Jumlah kata: 57/100
>
> Pada lebar CSS 320px, Beranda, Tentang, Produk, Galeri, dan Kontak tidak mengalami overflow horizontal. Form tetap di dalam viewport; tabel harga memakai area scroll tersendiri. Baseline pra-JavaScript adalah commit P07 `43481ca`. Screenshot homepage narrow dan wide 1440px serta form narrow tersedia. Semua bagian pengumpulan telah dilengkapi. `git status --porcelain` kosong setelah seluruh paket P08 di-commit secara lokal.

## Validasi Singkat oleh Dosen

Validasi singkat dapat dilakukan bila diperlukan. Mahasiswa mungkin diminta menunjukkan:

- file tempat navigasi dibuat;
- rule CSS yang mengatur layout responsif;
- commit final yang dikumpulkan;
- alasan satu breakpoint dipakai;
- bukti tabel atau form tetap usable pada viewport sempit.

Validasi ini bukan presentasi. Tujuannya memastikan proyek, evidence, dan jawaban CBT berada pada konteks pekerjaan yang sama.

## Format Nama File

Jika pengumpulan memakai dokumen, gunakan format nama:

```text
P08-NIM-Nama-Validasi-UTS.docx
```

## Setelah P08

Setelah P08 selesai, proyek ini menjadi baseline untuk P09 saat JavaScript mulai ditambahkan.
