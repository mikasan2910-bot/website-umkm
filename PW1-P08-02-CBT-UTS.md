# P08-02 - CBT UTS HTML/CSS Responsif

Lesson ini menjadi ruang utama pengerjaan UTS. CBT menguji pemahaman konsep, analisis kode, dan kemampuan membaca kode HTML/CSS yang telah dipraktikkan pada P01-P07.

## Bobot CBT

CBT berbobot **25% nilai akhir** dari total UTS sebesar 30%. Sisa 5% berasal dari pengumpulan proyek dan validasi evidence pada P08-03.

## Bentuk Soal

CBT dapat memuat beberapa tipe soal:

- Pilihan tunggal untuk konsep dasar.
- Pilihan ganda untuk memilih beberapa praktik yang benar.
- Matching untuk memasangkan konsep dengan perannya.
- Jawaban singkat untuk menganalisis gejala kode.
- Analisis potongan kode HTML/CSS.

## Materi yang Diuji

| Area | Contoh kompetensi |
| --- | --- |
| Ekosistem web | Menjelaskan peran browser, DevTools, resource, URL, dan Git. |
| HTML semantik | Memilih elemen yang tepat; memperbaiki heading, landmark, link, media, tabel, dan form. |
| CSS fundamental | Menganalisis cascade, specificity, box model, selector, token, dan state. |
| Layout | Memilih Grid atau Flexbox untuk struktur halaman dan komponen. |
| Responsive | Menentukan breakpoint, mengatasi overflow, dan membaca hasil device toolbar. |
| Accessibility | Menguji `alt`, `label`, focus, keyboard, kontras dasar, dan zoom. |
| Git evidence | Membaca status, commit, dan jejak perubahan proyek. |

## Contoh Gaya Soal

Soal CBT tidak hanya menanyakan definisi. Mahasiswa dapat diminta membaca kode berikut dan memilih perbaikan yang lebih semantik serta aksesibel:

```html
<div class="nav">
  <div onclick="location.href='produk.html'">Produk</div>
</div>
```

Contoh analisis CSS: tentukan penyebab overflow pada layar sempit dan strategi mobile-first yang sesuai.

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 320px);
}
```

## Strategi Pengerjaan

1. Baca instruksi setiap section dengan teliti.
2. Untuk soal kode, cari masalah makna, layout, aksesibilitas, atau responsivitas sebelum memilih jawaban.
3. Gunakan DevTools dan catatan proyek untuk membantu berpikir, bukan untuk mencoba jawaban secara acak.
4. Prioritaskan jawaban yang dapat dijelaskan dengan alasan teknis.
5. Pastikan semua jawaban terkirim sebelum waktu habis.

## Batasan

- Jangan menulis fitur JavaScript baru sebagai jawaban CBT.
- Jangan mengunggah file proyek pada lesson CBT; pengumpulan dilakukan di P08-03.
- Jangan mengubah jawaban berdasarkan komunikasi dengan peserta lain.

## Setelah CBT

Setelah CBT selesai, lanjutkan ke **P08-03 - Pengumpulan Proyek dan Validasi** untuk mengumpulkan proyek dan memvalidasi evidence.