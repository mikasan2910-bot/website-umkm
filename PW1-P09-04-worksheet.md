# PW1-P09-04: Tugas dan Worksheet JavaScript Fundamental dan Data

Gunakan sekitar **20 menit kegiatan kelas** untuk memulai pengembangan mandiri. Penyempurnaan dapat dilanjutkan di luar kelas sesuai jadwal dosen. Lesson ini menjadi lokasi satu-satunya untuk mengunduh dan mengumpulkan worksheet P09.

## Bobot dan Sub-CPMK

Tugas P09 berbobot **2%** pada komponen tugas dan memetakan **Sub-CPMK06.1.1**: menggunakan variabel, operator, conditional, array, object, dan data lokal dalam proyek Website Profil UMKM.

## Tugas Mandiri

Kembangkan hasil praktikum P09 menjadi fitur data produk yang lebih kaya dengan ketentuan:

1. Pertahankan struktur HTML/CSS responsif hasil P07/P08.
2. Gunakan satu file `js/app.js` yang dipahami dan dapat dijelaskan.
3. Hubungkan script dengan `defer` pada halaman yang relevan.
4. Modelkan minimal empat produk UMKM sebagai array of object.
5. Setiap object memiliki minimal `nama`, `kategori`, `harga`, `stok`, dan satu properti tambahan seperti `unggulan` atau `deskripsi`.
6. Gunakan `const` dan `let` sesuai kebutuhan.
7. Gunakan operator dan template literal untuk menyusun output.
8. Gunakan conditional untuk minimal dua keputusan, misalnya status stok dan label produk unggulan.
9. Render data ke DOM tanpa menyebabkan error pada halaman lain.
10. Gunakan Console DevTools untuk menampilkan `console.table`, membaca error, dan mencatat hasil debugging.
11. Commit hasil P09 dengan pesan yang menjelaskan fitur JavaScript.

P09 belum meminta event interaktif kompleks, filter, `localStorage`, atau Fetch API. Jangan memaksakan fitur P10-P13 sebelum fondasinya jelas.

## Identitas Mahasiswa

- Nama:
- NIM:
- Kelas:
- Nama proyek:
- Branch kerja (jika diminta):
- Commit hash P09:
- Pesan commit:

## Evidence Tugas Mandiri

Lampirkan bukti yang dibuat dari proyek sendiri. Jangan mengganti proyek dengan template lain atau menyertakan keterangan repo starter/instructor pada submission.

| ID | Evidence | Bukti/lokasi | Hasil/catatan |
| --- | --- | --- | --- |
| PW1-P09-E01 | Baseline Git | Screenshot `git status` sebelum pengerjaan dan catatan commit baseline yang dipakai. |  |
| PW1-P09-E02 | Struktur file | Screenshot struktur proyek yang menunjukkan `js/app.js`; HTML dan CSS tetap berada pada lokasi yang sesuai. |  |
| PW1-P09-E03 | Integrasi script | Potongan script tag dengan `defer` pada halaman relevan. |  |
| PW1-P09-E04 | Model data | Screenshot atau potongan kode array of object dengan minimal empat produk dan properti wajib. |  |
| PW1-P09-E05 | DevTools table | Screenshot `console.table` yang menunjukkan data produk. |  |
| PW1-P09-E06 | Conditional | Catatan atau potongan kode conditional status stok dan label tambahan seperti produk unggulan. |  |
| PW1-P09-E07 | Render produk | Screenshot hasil render kartu produk dinamis di halaman Produk. |  |
| PW1-P09-E08 | Debugging dan Console | Bukti tidak ada error Console pada Beranda dan Produk, serta catatan satu error yang sengaja dicari dan diperbaiki. |  |
| PW1-P09-E09 | Checkpoint Git | Hash commit P09 dan screenshot/teks `git status` bersih setelah commit. |  |

## Catatan Debugging

Catat error yang sengaja dicari, cara mengenalinya, dan perbaikannya. Jangan meninggalkan error tersebut pada hasil akhir.

| Jenis/pesan error | File dan baris | Penyebab | Perbaikan | Cara verifikasi |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Troubleshooting

Gunakan Console DevTools dan periksa pesan error, nama file, serta nomor baris sebelum mengubah kode.

| Gejala | Hal yang diperiksa | Perbaikan yang dicoba |
| --- | --- | --- |
| `app.js` tidak ditemukan atau berstatus 404 | Path `src`, lokasi file, dan ejaan huruf pada nama file. | Cocokkan `src="js/app.js"` dengan struktur folder proyek. |
| Pesan “P09 JavaScript aktif” tidak muncul | Script tag, atribut `defer`, serta Console/Network browser. | Pastikan script dimuat pada halaman dan reload setelah perubahan. |
| Kartu tidak tampil di Produk | ID `#produk-dinamis`, ID ringkasan, dan error pada Console. | Samakan selector di `app.js` dengan ID elemen pada `produk.html`. |
| Error pada halaman selain Produk | Guard untuk elemen yang tidak tersedia di halaman tersebut. | Kembalikan lebih awal jika target `grid` atau ringkasan tidak ditemukan. |
| Status stok tidak sesuai | Jenis data `stok` dan urutan kondisi. | Gunakan angka dan cek stok nol sebelum stok terbatas. |
| Harga promo tidak masuk akal | Nilai harga, rentang diskon, rumus, dan hasil pembulatan. | Pastikan harga tidak negatif, diskon berada di rentang 0-100, lalu uji dengan hitungan manual. |
| Format rupiah salah | Nilai yang diberikan ke formatter dan konfigurasi `Intl.NumberFormat`. | Berikan angka, bukan string berawalan `Rp`, dan periksa locale/currency. |

Untuk Challenge, validasi diskon sebagai angka dari 0 sampai 100, harga sebagai angka tidak negatif, dan hasil akhir sebagai angka valid. Contoh: harga Rp125.000 dengan diskon 10% menghasilkan Rp112.500.

## Checklist Quality Gate

- [ ] Struktur HTML/CSS responsif dari proyek tetap dipertahankan.
- [ ] `js/app.js` dimuat dengan `defer` pada halaman yang relevan.
- [ ] Array berisi minimal empat produk; setiap object memiliki `nama`, `kategori`, `harga`, `stok`, dan properti tambahan.
- [ ] Data dibaca dengan `console.table` dan Console tidak menyisakan error.
- [ ] Ada minimal dua keputusan conditional yang dihitung dari data.
- [ ] Template literal digunakan untuk menyusun output.
- [ ] Kartu produk dirender ke DOM; halaman selain Produk tidak error ketika target render tidak ditemukan.
- [ ] Beranda dan Produk bebas dari error Console setelah reload.
- [ ] Satu kasus debugging dicatat dan sudah diperbaiki.
- [ ] Commit P09 dapat ditelusuri dan `git status` bersih setelah checkpoint.
- [ ] Kode dapat dijelaskan menggunakan istilah `const`, `let`, array, object, conditional, DOM, dan DevTools.
- [ ] Submission tidak menyebut repo starter/instructor.

## Rubrik Ringkas

| Aspek | Bobot | Indikator |
| --- | ---: | --- |
| Struktur file dan integrasi script | 15% | Folder `js`, `app.js`, dan script `defer` benar; tidak merusak HTML/CSS sebelumnya. |
| Model data produk | 25% | Array of object konsisten, minimal empat produk, properti relevan, dan mudah dibaca. |
| Conditional dan operator | 20% | Status stok/label dihitung dari data, bukan ditulis manual berulang. |
| Rendering DOM | 20% | Data tampil sebagai kartu/section yang responsif dan tidak error pada halaman lain. |
| Debugging dan DevTools | 10% | Console/table/error dibaca dan dijelaskan secara konkret. |
| Evidence dan Git | 10% | Worksheet lengkap, commit hash jelas, dan status Git bersih. |

## Challenge

Tambahkan properti `diskonPersen` pada satu produk. Hitung harga setelah diskon dengan operator aritmatika, tampilkan harga normal dan harga promo, lalu jelaskan cara memastikan hasilnya tetap valid.

### Jawaban Challenge

- Produk yang diberi diskon:
- Rumus perhitungan:
- Harga normal:
- Harga promo:
- Cara memastikan hasil valid (contoh: cek nilai diskon, bandingkan hasil manual, dan uji format rupiah):

## Checkpoint Git

- Hash commit P09:
- Pesan commit:
- Bukti `git status` bersih:
- Catatan validasi akhir:
