# PW1-P06-04: Tugas dan Worksheet Layout Grid/Flexbox

## 1. Identitas
- Nama: Sani
- NIM: NIM placeholder
- Proyek: Kopi Bangsa UMKM website
- URL proyek: file:///D:/sani/website-umkm-main
- Tanggal: 2026-10-08

## 2. Pilihan halaman mandiri
Halaman yang dipilih untuk tugas mandiri adalah `tentang.html`, bukan halaman layout yang paling sering dikembangkan pada P06-02. Alasan pemilihannya:

- halaman ini memiliki narasi visual yang perlu dibaca sebagai satu alur;
- teks utama dan ilustrasi sebaiknya disusun dalam dua kolom untuk menunjang hierarki;
- nilaiku dan metrik usaha lebih cocok dibuat satu dimensi (flex) agar mudah dibaca.

Alternatif yang dipertimbangkan adalah tetap menjaga layout berbentuk satu kolom penuh, namun pilihan dua kolom lebih cocok karena membuat cerita usaha lebih jelas dan memanfaatkan Grid secara semantik.

## 3. Desain dan keputusan layout
### Grid pada halaman Tentang Kami
Layout utama dibuat dengan Grid agar cerita usaha dan gambar tidak hanya sekadar stacking. Container `story-layout` memakai:

```css
.story-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-4);
  align-items: center;
}
```

- 2 tracks: satu untuk teks cerita dan satu untuk visual;
- `gap` menjaga jarak antarelemen tanpa margin manual berulang;
- `align-items: center` menstabilkan rata tengah pada tinggi kolom yang berbeda.

### Flexbox pada angka dan daftar nilai
Untuk dua area satu dimensi, saya menggunakan Flexbox:

```css
.story-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.value-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
```

Pada `story-meta`, main axis horizontal; cross axis vertikal. Pada `value-list`, item berbentuk chips yang dapat membungkus ke baris berikutnya tanpa mengganggu urutan DOM.

### Positioning lokal
Saya memakai satu positioning lokal pada badge visual:

```css
.story-visual {
  position: relative;
}

.story-badge {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
}
```

Containing block untuk badge adalah `.story-visual`, sehingga label `Manual brew` menempel pada konteks visual tanpa mengganggu layout utama.

## 4. Challenge: Grid areas pada halaman katalog
Pada halaman `produk.html`, saya menambahkan layout katalog berbasis Grid areas untuk area filter dan produk. Urutan DOM tetap filter sebelum produk, sesuai permintaan challenge:

```css
.catalog-layout {
  display: grid;
  grid-template-columns: 14rem minmax(0, 1fr);
  grid-template-areas: "filter products";
  gap: var(--space-4);
  align-items: start;
}

.catalog-filter { grid-area: filter; }
.catalog-products { grid-area: products; }
```

Keputusan ini belum memakai media query karena P06 fokus pada pemahaman struktur layout dan hubungan antarelemen. Perbaikan mobile-first ditunda ke P07.

## 5. Code review
### Masukan dari teman
"Layout halaman tentang terasa lebih jelas, tetapi kita perlu memastikan elemen visual punya label konteks agar membedakan dari gambar utama."

### Keputusan dan perbaikan
- Menambahkan badge `Manual brew` pada visual.
- Memastikan `figure`/`img` tetap memiliki `alt` yang informatif dan tetap sebagai konten visual, bukan penanda utama.
- Menjaga urutan DOM tetap logis dan fokus keyboard tetap mengikuti alur baca halaman.

## 6. Checklist regresi
- [x] Navigasi masih konsisten dan link aktif tetap jelas.
- [x] Keyboard focus terlihat pada link dan tombol.
- [x] Media, tabel, dan validasi form tetap berfungsi seperti baseline sebelumnya.
- [x] Console tidak menampilkan error pada halaman setelah perubahan layout.
- [x] Urutan DOM tetap logis; fokus tidak terputus oleh layout visual.
- [x] Tidak ada media query atau breakpoint ditambahkan pada checkpoint P06.

## 7. Bukti Git
Commit final P06 akan dicatat setelah perubahan selesai dan diverifikasi melalui Git.

## 8. Jawaban Exit Ticket
1. Mengapa satu area memakai Grid dan area lain memakai Flexbox?
   Karena halaman tentang memiliki hubungan dua dimensi antara teks dan visual, sementara daftar nilai dan metrik adalah satu dimensi yang dapat dibungkus.

2. Apa main axis dan cross axis pada salah satu Flex container proyek?
   Pada `.story-meta` dan `.value-list`, main axis adalah horizontal dan cross axis adalah vertikal. Saat item membungkus, item baru pindah ke baris berikut.

3. Apa containing block untuk elemen positioned pada proyek?
   Containing block untuk `.story-badge` adalah `.story-visual`, karena elemen tersebut memiliki `position: relative` dan badge menggunakan `position: absolute`.

4. Masalah layout apa yang sengaja ditunda ke P07?
   Responsive mobile-first, breakpoint, dan penyelarasan layout pada viewport kecil belum diperlakukan karena P06 fokus pada struktur dan mekanisme layout.

5. Commit mana yang merepresentasikan hasil final P06?
   Commit final yang dibuat setelah penyesuaian P06-04 dan worksheet.

## 9. Catatan akhir
Repository ini mengikuti batas P06: layout dibangun melalui Grid dan Flexbox, tanpa media query, dan setiap perubahan tetap mempertahankan semantic HTML serta aksesibilitas dasar.
