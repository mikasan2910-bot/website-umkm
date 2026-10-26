# PW1-P09-04: Worksheet Evidence Praktikum JavaScript Fundamental dan Data

## Identitas

- Nama:
- NIM:
- Kelas:
- Nama proyek: Kopi Bangsa - Website UMKM
- Branch kerja (jika diminta):
- Commit P09:

## Briefing

Lengkapi evidence P09-02 untuk menunjukkan koneksi JavaScript, pengelolaan data produk lokal, conditional status stok, dan rendering ke DOM. Jangan menghapus katalog atau tabel harga statis yang sudah ada.

## Evidence Praktikum

| ID | Evidence | Bukti yang dicatat | Hasil/catatan |
| --- | --- | --- | --- |
| PW1-P09-E01 | Baseline Git | Catat hasil `git status` sebelum praktik dan lima commit terakhir. Jika branch diminta, catat nama branch. |  |
| PW1-P09-E02 | Struktur file | Tunjukkan `js/app.js` berada di folder `js/` dan file HTML/CSS tetap pada folder yang sesuai. |  |
| PW1-P09-E03 | Koneksi script | Tunjukkan kelima halaman memuat `js/app.js` dengan `defer`; Console menampilkan “P09 JavaScript aktif” tanpa error. |  |
| PW1-P09-E04 | Target render | Tunjukkan `#produk-dinamis` dan `#produk-ringkasan` pada `produk.html`; katalog statis tetap tersedia. |  |
| PW1-P09-E05 | Data produk | Tunjukkan `console.table(produkUmkm)` dengan tiga object yang memiliki variasi stok tersedia, terbatas, dan habis. |  |
| PW1-P09-E06 | Format rupiah | Tunjukkan hasil `Intl.NumberFormat` di Console, misalnya `Rp85.000`. |  |
| PW1-P09-E07 | Conditional stok | Tunjukkan label “Tersedia”, “Stok terbatas”, dan “Habis” sesuai nilai stok. Catat hasil bila salah satu nilai stok diuji ulang. |  |
| PW1-P09-E08 | Rendering DOM | Tunjukkan kartu dari data lokal, ringkasan jumlah produk, serta halaman selain Produk yang tetap bebas error. |  |
| PW1-P09-E09 | Style dan responsif | Tunjukkan kartu, badge stok, dan tata letak grid pada lebar sempit dan lebar desktop. |  |

## Checklist Quality Gate

- [ ] `app.js` dimuat menggunakan `defer` pada Beranda, Tentang, Produk, Galeri, dan Kontak.
- [ ] Data produk disimpan sebagai array of object dengan minimal tiga variasi stok.
- [ ] Formatter rupiah dan `console.table` digunakan.
- [ ] Status stok ditentukan dengan conditional dan label kategori memakai `switch`.
- [ ] DOM dipilih dengan `querySelector`; halaman selain `produk.html` tidak error karena target render tidak tersedia.
- [ ] Katalog dan tabel harga statis tetap ada.
- [ ] Tidak ada error Console setelah halaman dimuat.
- [ ] Perubahan P09 dapat ditelusuri melalui commit.

## Catatan Debugging

| Jenis error | File/baris | Penyebab | Perbaikan |
| --- | --- | --- | --- |
|  |  |  |  |

## Checkpoint Git

- Hash commit P09:
- Pesan commit:
- Hasil `git status` setelah checkpoint: