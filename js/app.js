"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
  { nama: "Arabika Gayo", kategori: "Kopi", harga: 85000, stok: 12, unggulan: true, deskripsi: "Aroma floral dan rasa seimbang." },
  { nama: "Robusta Temanggung", kategori: "Kopi", harga: 65000, stok: 4, unggulan: false, deskripsi: "Body kuat dengan sentuhan cokelat." },
  { nama: "Paket Seduh", kategori: "Bundling", harga: 125000, stok: 0, unggulan: true, deskripsi: "Paket kopi dan alat seduh rumahan.", diskonPersen: 10 },
  { nama: "Kopi Lereng Pekalongan", kategori: "Kopi", harga: 32000, stok: 8, unggulan: false, deskripsi: "Kopi lokal untuk seduhan harian." },
];

console.table(produkUmkm);

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

console.log("Contoh format rupiah:", formatRupiah.format(produkUmkm[0].harga));

function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}

function labelKategori(kategori) {
  switch (kategori) {
    case "Kopi":
      return "Produk kopi pilihan";
    case "Bundling":
      return "Paket hemat";
    default:
      return "Produk UMKM";
  }
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const kategori = labelKategori(produk.kategori);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
    const labelUnggulan = produk.unggulan ? "Produk unggulan" : "Pilihan kedai";
    const hargaPromo = produk.diskonPersen
      ? produk.harga * (1 - produk.diskonPersen / 100)
      : null;
    const markupHarga = hargaPromo
      ? `<p class="price price-promo"><s>${formatRupiah.format(produk.harga)}</s> ${formatRupiah.format(hargaPromo)}</p>`
      : `<p class="price">${formatRupiah.format(produk.harga)}</p>`;

    if (produk.stok > 0) {
      jumlahTersedia = jumlahTersedia + 1;
    }

    markup = markup + `
      <article class="js-product-card">
        <span class="js-product-label">${labelUnggulan}</span>
        <h3>${produk.nama}</h3>
        <p>${kategori}</p>
        <p>${produk.deskripsi}</p>
        ${markupHarga}
        ${produk.diskonPersen ? `<p class="discount-note">Diskon ${produk.diskonPersen}%</p>` : ""}
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p>${labelAksi}</p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);