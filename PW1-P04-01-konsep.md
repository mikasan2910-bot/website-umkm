# PW1-P04-01: Form Kontak yang Jelas dan Semantik

**Durasi:** sekitar 35 menit | **Jenis unit:** konsep, demonstrasi, dan contoh ringkas

Unit ini membahas cara merancang form kontak yang dapat dipahami, diisi, dan diperiksa dengan keyboard. Aktivitas membangun halaman dilakukan pada lesson praktikum tersendiri.

## Capaian Pembelajaran

Setelah menyelesaikan unit ini, mahasiswa mampu:

1. memilih elemen form sesuai jenis data;
2. menghubungkan setiap kontrol dengan `label`;
3. mengelompokkan pilihan terkait memakai `fieldset` dan `legend`;
4. memakai validation attribute HTML seperti `required`, `minlength`, dan `type="email"`;
5. menulis tombol submit yang jelas;
6. memeriksa focus order dengan keyboard.

## Alur 35 Menit

| Waktu | Kegiatan | Fokus |
| --- | --- | --- |
| 0-5 menit | Pembuka: form sebagai percakapan | Pertanyaan yang jelas dan urutan yang masuk akal |
| 5-12 menit | Demonstrasi struktur minimum | `form`, `label`, `input`, dan tombol submit |
| 12-19 menit | Memilih kontrol dan mengelompokkan pilihan | `input type`, `textarea`, `select`, `fieldset`, dan `legend` |
| 19-26 menit | Validasi bawaan browser | `required`, `minlength`, dan `type="email"` |
| 26-32 menit | Demonstrasi akses keyboard | Focus order dan indikator fokus |
| 32-35 menit | Cek pemahaman dan transisi | Menyimpulkan prinsip sebelum praktikum P04-02 |

## Form Adalah Percakapan

Form bukan sekadar kumpulan kotak input. Form adalah percakapan antara pengguna dan website. Pertanyaan yang ditampilkan harus jelas, urutannya masuk akal, dan setiap kontrol perlu nama yang dapat dikenali manusia maupun pembaca layar.

Struktur minimum form kontak:

```html
<form action="#" method="post">
  <label for="nama">Nama</label>
  <input id="nama" name="nama" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <button type="submit">Kirim Pesan</button>
</form>
```

Relasi `for` pada `label` harus sama dengan `id` pada kontrol. Ini membuat teks label dapat diklik dan membantu teknologi bantu memahami nama field. Atribut `name` memberi nama data yang dikirim saat form disubmit.

## Memilih Input Type

`input type` membantu browser memberi keyboard, validasi dasar, dan pengalaman input yang lebih cocok.

| Kebutuhan data | Elemen yang disarankan | Catatan |
| --- | --- | --- |
| Nama | `input type="text"` | Pakai `required` jika wajib. |
| Email | `input type="email"` | Browser dapat mengecek pola email dasar. |
| Nomor telepon | `input type="tel"` | Format nomor tetap perlu dijelaskan. |
| Tanggal kunjungan | `input type="date"` | Cocok untuk pilihan tanggal sederhana. |
| Pesan panjang | `textarea` | Cocok untuk pertanyaan atau catatan. |
| Pilihan paket | `select` | Cocok jika opsi terbatas. |

Pilih kontrol berdasarkan data yang dibutuhkan, bukan semata-mata tampilan. Jangan menggunakan placeholder sebagai pengganti `label`: placeholder dapat hilang saat pengguna mulai mengetik.

## Fieldset dan Legend

Gunakan `fieldset` dan `legend` untuk mengelompokkan kontrol yang saling terkait, terutama radio button atau checkbox.

```html
<fieldset>
  <legend>Topik pertanyaan</legend>

  <label>
    <input type="radio" name="topik" value="produk" required />
    Informasi produk
  </label>

  <label>
    <input type="radio" name="topik" value="kerja-sama" />
    Kerja sama
  </label>
</fieldset>
```

`legend` memberi konteks untuk seluruh grup. Radio button dengan `name` yang sama menjadi pilihan dalam satu grup sehingga pengguna memilih satu topik.

## Validation Attribute

Validation attribute HTML membantu browser memberi umpan balik awal tanpa menulis banyak JavaScript.

```html
<input id="nama" name="nama" type="text" required minlength="3" />
<input id="email" name="email" type="email" required />
<textarea id="pesan" name="pesan" required minlength="10"></textarea>
```

Gunakan validasi dasar ini untuk menjaga data minimum. `required` menandai isian wajib, `minlength` menetapkan panjang minimum, dan `type="email"` meminta format email yang dikenali browser. Validasi browser membantu pengguna, tetapi tidak menggantikan validasi server pada aplikasi nyata.

Pada unit ini, JavaScript bukan fokus validasi. Preview ringan boleh digunakan pada lesson praktik agar mahasiswa dapat melihat data yang diketik, tetapi validasi utama tetap menggunakan atribut HTML.

## Tombol Submit yang Jelas

Teks tombol sebaiknya menjelaskan tindakan yang akan dilakukan, misalnya `Kirim Pesan` atau `Minta Informasi`. Hindari label yang tidak memberi konteks seperti `Submit` jika pengguna lebih terbantu oleh tindakan yang spesifik. Pastikan tombol memakai `type="submit"`.

## Focus Order

Focus order adalah urutan perpindahan fokus saat pengguna menekan tombol Tab. Urutan yang baik mengikuti alur visual dan logika pertanyaan.

Demonstrasi pemeriksaan:

1. buka halaman `kontak.html`;
2. tekan Tab dari awal halaman;
3. pastikan fokus masuk ke link navigasi, lalu field form, lalu tombol submit;
4. pastikan tidak ada field yang terlewat;
5. pastikan teks fokus terlihat.

Hindari memakai `tabindex` positif karena sering membuat urutan fokus membingungkan. Susun elemen interaktif sesuai urutan baca yang diharapkan dan pertahankan indikator `:focus-visible` yang jelas.

## Cek Pemahaman

Sebelum lanjut, diskusikan atau jawab singkat:

- Mengapa `label` harus terhubung ke kontrol melalui `for` dan `id`?
- Kapan pilihan terkait sebaiknya dikelompokkan memakai `fieldset` dan `legend`?
- Apa bantuan yang diberikan `required`, `minlength`, dan `type="email"`?
- Bagaimana memastikan pengguna keyboard melihat dan mengikuti focus order yang masuk akal?

## Arah Setelah Materi

Setelah memahami konsep dan mencoba contoh ringkas, lanjutkan ke **P04-02** untuk membuat `kontak.html`, menambahkan `js/form.js` sebagai preview ringan, serta menguji focus order. Aktivitas membangun halaman dan pengujiannya berada pada lesson praktikum tersebut.
