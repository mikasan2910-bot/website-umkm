# PW1-P05 Evidence Worksheet

## Evidence

| ID | Praktik/tugas | Bukti | Hasil |
| --- | --- | --- | --- |
| PW1-P05-E01 | Koneksi stylesheet | Lima halaman utama dan `js/galeri.html` memuat `css/style.css`. | Lulus |
| PW1-P05-E02 | Baseline dan token | `box-sizing` computed adalah `border-box`; token warna, spacing, radius, dan shadow tersedia di `:root`. | Lulus |
| PW1-P05-E03 | Perbandingan tema | Tema sebelum dan variasi Pinus dan Gula Aren dicatat di worksheet; screenshot sebelum belum tersedia. | Sebagian |
| PW1-P05-E04 | Tipografi dan komponen | Hero, navigasi, kartu produk, tabel, form, gambar, dan audio diperiksa di browser. | Lulus |
| PW1-P05-E05 | Focus-visible | Tab menampilkan outline pada link dan kontrol form; screenshot field fokus terlampir. | Lulus |
| PW1-P05-E06 | Styles dan cascade | `button` dan `.hero button` berkonflik pada `background`; selector `.hero button` menang karena specificity lebih tinggi. Screenshot DevTools belum tersedia. | Sebagian |
| PW1-P05-E07 | Computed styles | Warna, kontras, radius, dan `box-sizing` diperiksa melalui browser. | Lulus |
| PW1-P05-E08 | Checkpoint Git | Praktikum `194afa7`; variasi tema tugas mandiri `7e9378d`; evidence `ef4ad82`. | Lulus |

## Hasil validasi

- Seluruh halaman diperiksa memuat stylesheet; gambar termuat, tabel/form tetap ada, dan kontrol audio tersedia.
- Tombol promo berfungsi. Form kosong ditolak oleh validasi native; submit valid menghasilkan preview dengan live region.
- Tidak ditemukan Grid, Flexbox, media query, atau `outline: none` pada stylesheet.
- Kontras teks yang diperiksa memenuhi WCAG AA. Nilai utama: teks hero 7.86:1, CTA hero 9.22:1, teks muted 5.57:1, teks status 11.73:1, dan focus indicator 6.01:1.
- `git diff --check` dan diagnostik editor bersih.

## Tugas mandiri

Variasi **Pinus dan Gula Aren** memakai token warna fungsional yang diperbarui, termasuk `--color-primary: #245b4a`, `--color-focus: #a33b16`, dan `--color-success: #17613e`. Pasangan radius baru `--radius-card: 1rem` dan `--radius-feature: 1.5rem` digunakan pada `.product-card` dan `.hero`. Navigasi dan hero berbagi `--color-primary`.

Status sukses menampilkan teks “Preview berhasil dibuat.” melalui `aria-live="polite"`; warna hanya menjadi penanda tambahan.

![Navigasi dan hero menggunakan token tema yang sama](assets/evidence/PW1-P05-04/tema-komponen.png)

![Focus-visible pada field Nama lengkap](assets/evidence/PW1-P05-04/focus-visible.png)

Konflik cascade yang dicatat: `button` (specificity `(0,0,1)`) menetapkan primary, sedangkan `.hero button` (`(0,1,1)`) menetapkan highlight dan menang. Warna computed tombol hero adalah `rgb(244, 210, 125)`. Screenshot Styles/Computed DevTools masih perlu dilampirkan.

Commit tugas mandiri: `7e9378d` (`feat: add pinus and palm sugar P05-04 theme`). Commit evidence: `ef4ad82` (`docs: record P05-04 evidence`).

## Lampiran yang belum tersedia

- Screenshot sebelum/sesudah.
- Screenshot DevTools Styles/Computed yang menunjukkan konflik cascade.