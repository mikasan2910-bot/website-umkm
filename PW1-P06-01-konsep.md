## P06-01 - Materi Layout dengan Grid dan Flexbox
P05 memberi website UMKM fondasi visual berupa design token, tipografi, warna, dan komponen dasar. P06 mengatur hubungan antarkomponen menjadi layout yang stabil. Fokusnya adalah memahami normal flow, konteks positioning, Flexbox satu dimensi, serta Grid dua dimensi sebelum responsive design dibahas pada P07.
## Capaian Pembelajaran
Setelah menyelesaikan unit ini, mahasiswa mampu:

1. menjelaskan normal flow dan pengaruh `display` terhadap pembentukan layout;
2. membaca content, padding, border, dan margin melalui box model DevTools;
3. menggunakan pasangan `position: relative` dan `position: absolute` dengan containing block yang jelas;
4. menjelaskan main axis, cross axis, wrapping, dan alignment pada Flexbox;
5. menjelaskan tracks, lines, cells, areas, `fr`, `repeat()`, dan `minmax()` pada Grid;
6. memilih Flexbox atau Grid berdasarkan pola hubungan antarelemen, bukan berdasarkan kebiasaan;
7. menjaga urutan DOM tetap logis ketika tampilan disusun secara visual.
P06 membahas mekanisme layout. P06 belum memakai media query, breakpoint, `clamp()`, device testing, atau strategi mobile-first. Topik tersebut menjadi fokus P07.
## Normal Flow sebagai Titik Awal
Browser menempatkan elemen sesuai urutan dokumen sebelum aturan layout khusus diterapkan. Elemen block membentuk baris baru, sedangkan konten inline mengalir bersama teks.
.page-section {
  margin-block: var(--space-4);
}

.tag {
  display: inline-block;
  padding: var(--space-1) var(--space-2);
}
Normal flow bukan masalah yang harus selalu dihilangkan. Ia adalah baseline yang membuat konten tetap terbaca ketika CSS belum termuat atau satu deklarasi gagal.

## Box Model dan Ukuran Aktual
Dengan baseline P05 berikut, nilai `width` mencakup content, padding, dan border:
*,
*::before,
*::after {
  box-sizing: border-box;
}
Jika sebuah card memiliki `width: 18rem`, `padding: 1rem`, dan border `1px`, ukuran luarnya tetap 18rem ketika memakai `border-box`. DevTools tab Computed menampilkan ukuran aktual serta lapisan box model.

## Positioning dan Containing Block
Gunakan positioning ketika satu elemen memang perlu menempel pada konteks tertentu, bukan untuk menyusun seluruh halaman.
.product-card {
  position: relative;
}

.product-badge {
  position: absolute;
  inset-block-start: var(--space-2);
  inset-inline-end: var(--space-2);
}
`position: relative` pada card menetapkan containing block untuk badge. Tanpanya, posisi badge dapat dihitung terhadap ancestor lain dan terlihat berpindah.

Nilai positioning yang perlu dibedakan:

- `static`: nilai default, mengikuti normal flow;
- `relative`: tetap mengambil ruang awal dan dapat menjadi containing block;
- `absolute`: keluar dari normal flow dan diposisikan terhadap containing block;
- `fixed`: melekat pada viewport;
- `sticky`: bergerak bersama flow sampai ambang tertentu tercapai.
Pada P06, praktik positioning dibatasi pada badge card agar fungsi dan konteksnya mudah diaudit.

## Flexbox untuk Hubungan Satu Dimensi
Flexbox mengatur item pada satu sumbu utama. `flex-direction` menentukan main axis; cross axis selalu tegak lurus terhadapnya.
.nav-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-2);
}
`justify-content` bekerja pada main axis, bukan selalu horizontal. `align-items` bekerja pada cross axis, bukan selalu vertikal. Ketika `flex-direction` berubah, arah kedua konsep ikut berubah.

Properti penting:

- container: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`;
- item: `flex-grow`, `flex-shrink`, `flex-basis`, bentuk ringkas `flex`, dan `align-self`.
Hindari memakai `order` untuk menutupi struktur HTML yang tidak logis. Urutan visual berbeda dari urutan DOM dapat membingungkan pengguna keyboard dan pembaca layar.

## Grid untuk Hubungan Dua Dimensi
Grid mengatur kolom dan baris secara bersamaan. Container membentuk grid formatting context; anak langsungnya menjadi grid item.
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(12rem, 1fr));
  gap: var(--space-4);
}
Pada contoh tersebut:

- `repeat(3, ...)` membentuk tiga track kolom;
- `minmax(12rem, 1fr)` memberi batas minimum track dan membagi ruang tersisa;
- `1fr` adalah satu bagian dari ruang yang tersedia;
- `gap` membuat jarak antarkomponen tanpa margin saling bertabrakan.
Grid terminology:

- track: satu kolom atau baris;
- line: garis pembatas track;
- cell: pertemuan satu baris dan satu kolom;
- area: beberapa cell yang membentuk wilayah persegi panjang.
Untuk layout halaman yang memiliki wilayah bernama, Grid areas dapat memperjelas intent:
.catalog-layout {
  display: grid;
  grid-template-columns: 14rem minmax(0, 1fr);
  grid-template-areas: "filter products";
  gap: var(--space-4);
}

.catalog-filter { grid-area: filter; }
.product-list { grid-area: products; }
## Memilih Grid atau Flexbox
Gunakan pertanyaan berikut sebelum menulis `display`:

PertanyaanPilihan awalItem terutama berjajar pada satu baris atau satu kolom?FlexboxKolom dan baris harus memiliki struktur bersama?GridUkuran konten menentukan pembagian ruang sepanjang satu axis?FlexboxTrack container menentukan posisi banyak item?GridHanya badge perlu menempel pada card?Positioning lokalKonten sudah terbaca baik tanpa layout khusus?Pertahankan normal flow
