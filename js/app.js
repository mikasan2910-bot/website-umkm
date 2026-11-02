"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
  { nama: "Arabika Gayo", kategori: "Kopi", harga: 85000, stok: 12, unggulan: true, deskripsi: "Aroma floral dan rasa seimbang." },
  { nama: "Robusta Temanggung", kategori: "Kopi", harga: 65000, stok: 4, unggulan: false, deskripsi: "Body kuat dengan sentuhan cokelat." },
  { nama: "Paket Seduh", kategori: "Bundling", harga: 125000, stok: 0, unggulan: true, deskripsi: "Paket kopi dan alat seduh rumahan.", diskonPersen: 10 },
  { nama: "Kopi Lereng Pekalongan", kategori: "Kopi", harga: 32000, stok: 8, unggulan: false, deskripsi: "Kopi lokal untuk seduhan harian." },
];

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

console.log("Contoh format rupiah:", formatRupiah(produkUmkm[0].harga));

function statusStok(stok) {
  if (stok <= 0) {
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

function hitungHargaPromo(harga, diskonPersen) {
  if (
    !Number.isFinite(harga) ||
    !Number.isFinite(diskonPersen) ||
    harga < 0 ||
    diskonPersen < 0 ||
    diskonPersen > 100
  ) {
    return null;
  }

  return Math.round(harga * (1 - diskonPersen / 100));
}

function buatKartuProduk(produk) {
  const status = statusStok(produk.stok);
  const kategori = labelKategori(produk.kategori);
  const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
  const badgeUnggulan = produk.unggulan
    ? '<span class="js-product-label">Produk unggulan</span>'
    : "";
  const hargaPromo = produk.diskonPersen === undefined
    ? null
    : hitungHargaPromo(produk.harga, produk.diskonPersen);
  const markupHarga = hargaPromo !== null
    ? `<p class="price price-promo"><s>${formatRupiah(produk.harga)}</s> ${formatRupiah(hargaPromo)}</p>`
    : `<p class="price">${formatRupiah(produk.harga)}</p>`;

  return `
    <article class="js-product-card">
      ${badgeUnggulan}
      <h3>${produk.nama}</h3>
      <p>${kategori}</p>
      <p>${produk.deskripsi}</p>
      ${markupHarga}
      ${hargaPromo !== null ? `<p class="discount-note">Diskon ${produk.diskonPersen}%</p>` : ""}
      <span class="stock-badge ${status.className}">${status.label}</span>
      <p>${labelAksi}</p>
    </article>
  `;
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");
  const unggulan = document.querySelector("#produk-unggulan");

  if (!grid || !ringkasan || !unggulan) {
    console.warn("Target render produk belum lengkap.");
    return;
  }

  produkUmkm.forEach((produk) => {
    console.log("Debug produk:", produk.nama, "stok:", produk.stok);
  });

  const produkTersedia = produkUmkm.filter((produk) => produk.stok > 0);
  const produkUnggulan = produkUmkm.find((produk) => produk.unggulan === true);
  const markupProduk = produkTersedia.map(buatKartuProduk).join("");

  grid.innerHTML = markupProduk;
  ringkasan.textContent = `${produkTersedia.length} produk tersedia dari ${produkUmkm.length} data.`;
  unggulan.textContent = produkUnggulan
    ? `Produk unggulan: ${produkUnggulan.nama}`
    : "Belum ada produk unggulan.";

  console.table(produkUmkm);
}

document.addEventListener("DOMContentLoaded", renderProduk);