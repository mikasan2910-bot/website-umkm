"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
  { nama: "Arabika Gayo", kategori: "Kopi", harga: 85000, stok: 12, unggulan: true, deskripsi: "Aroma floral dan rasa seimbang." },
  { nama: "Robusta Temanggung", kategori: "Kopi", harga: 65000, stok: 4, unggulan: false, deskripsi: "Body kuat dengan sentuhan cokelat." },
  { nama: "Paket Seduh", kategori: "Bundling", harga: 125000, stok: 0, unggulan: true, deskripsi: "Paket kopi dan alat seduh rumahan.", diskonPersen: 10 },
  { nama: "Kopi Lereng Pekalongan", kategori: "Kopi", harga: 32000, stok: 8, unggulan: false, deskripsi: "Kopi lokal untuk seduhan harian." },
  { nama: "Roti Kopi Gula Aren", kategori: "Makanan", harga: 18000, stok: 6, unggulan: false, deskripsi: "Roti lembut dengan aroma kopi dan isian gula aren.", gambar: "assets/images/roti-kopi-gula-aren.jpg" },
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

function buatElemenProduk(produk) {
  const card = document.createElement("article");
  card.classList.add("product-card");

  if (produk.gambar) {
    const figure = document.createElement("figure");
    figure.classList.add("product-card-figure");

    const image = document.createElement("img");
    image.classList.add("product-card-image");
    image.src = produk.gambar;
    image.alt = `Foto ${produk.nama}`;
    image.width = 900;
    image.height = 599;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = "Foto roti kopi gula aren";

    figure.append(image, caption);
    card.append(figure);
  }

  const title = document.createElement("h3");
  title.textContent = produk.nama;

  const category = document.createElement("p");
  category.classList.add("category-note");
  category.textContent = produk.kategori;

  const description = document.createElement("p");
  description.textContent = produk.deskripsi;

  const price = document.createElement("p");
  price.classList.add("price");
  const hargaPromo = produk.diskonPersen === undefined
    ? null
    : hitungHargaPromo(produk.harga, produk.diskonPersen);
  price.textContent = hargaPromo === null
    ? formatRupiah(produk.harga)
    : `${formatRupiah(hargaPromo)} (diskon ${produk.diskonPersen}%)`;

  const status = statusStok(produk.stok);
  const stock = document.createElement("span");
  stock.classList.add("stock-badge");
  if (status.className) {
    stock.classList.add(status.className);
  }
  stock.textContent = status.label;

  if (produk.unggulan) {
    const badge = document.createElement("span");
    badge.classList.add("js-product-label");
    badge.textContent = "Produk unggulan";
    card.append(badge);
  }

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Sembunyikan";
  removeButton.classList.add("ghost-button");
  removeButton.addEventListener("click", () => {
    card.remove();
    produkStatus.textContent = "Satu kartu disembunyikan dari tampilan sementara.";
  });

  card.append(title, category, description, price, stock, removeButton);
  return card;
}

function buatEmptyState(kategori, statusStokAktif) {
  const empty = document.createElement("p");
  empty.classList.add("empty-state");
  empty.textContent = statusStokAktif === "Semua"
    ? `Belum ada produk pada kategori ${kategori}.`
    : `Belum ada produk pada kategori ${kategori} dengan status stok ${statusStokAktif}.`;
  return empty;
}

function buatRingkasanKategori(produkList) {
  const jumlahPerKategori = {};

  produkList.forEach((produk) => {
    jumlahPerKategori[produk.kategori] = (jumlahPerKategori[produk.kategori] || 0) + 1;
  });

  return Object.entries(jumlahPerKategori)
    .map(([kategori, jumlah]) => `${kategori}: ${jumlah} produk`)
    .join(", ");
}

const produkGrid = document.querySelector("#produk-grid");
const produkStatus = document.querySelector("#produk-status");
const produkFilterSummary = document.querySelector("#produk-filter-summary");
const tombolFilter = document.querySelectorAll("[data-filter]");
const tombolFilterStok = document.querySelectorAll("[data-stock-filter]");
let kategoriAktif = "Semua";
let statusStokAktif = "Semua";

function renderProduk(kategori = kategoriAktif, filterStok = statusStokAktif) {
  if (!produkGrid || !produkStatus || !produkFilterSummary) {
    console.warn("Target render produk tidak ditemukan.");
    return;
  }

  kategoriAktif = kategori;
  statusStokAktif = filterStok;

  const unggulan = document.querySelector("#produk-unggulan");
  const ringkasanKategori = document.querySelector("#ringkasan-kategori");

  const produkTampil = produkUmkm.filter((produk) => {
    const cocokKategori = kategoriAktif === "Semua" || produk.kategori === kategoriAktif;
    const cocokStok = statusStokAktif === "Semua"
      || statusStok(produk.stok).label === statusStokAktif;
    return cocokKategori && cocokStok;
  });

  produkGrid.replaceChildren();
  produkFilterSummary.textContent = `Kategori ${kategoriAktif} menampilkan ${produkTampil.length} produk dari ${produkUmkm.length} total produk${statusStokAktif === "Semua" ? "." : ` dengan stok ${statusStokAktif}.`}`;

  if (produkTampil.length === 0) {
    produkGrid.append(buatEmptyState(kategoriAktif, statusStokAktif));
    produkStatus.textContent = "0 produk ditemukan.";
    return;
  }

  produkTampil.forEach((produk) => {
    produkGrid.append(buatElemenProduk(produk));
  });

  produkStatus.textContent = `${produkTampil.length} produk ditampilkan.`;
  const produkUnggulan = produkUmkm.find((produk) => produk.unggulan === true);
  unggulan.textContent = produkUnggulan
    ? `Produk unggulan: ${produkUnggulan.nama}`
    : "Belum ada produk unggulan.";
  ringkasanKategori.textContent = buatRingkasanKategori(produkUmkm);
}

if (produkGrid && produkStatus) {
  renderProduk();
}

function pasangFilter(tombolList, bacaNilai, pilihFilter) {
  tombolList.forEach((tombol) => {
    tombol.addEventListener("click", (event) => {
      const tombolAktif = event.currentTarget;
      const nilaiAktif = bacaNilai(tombolAktif);

      tombolList.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      tombolAktif.classList.add("is-active");
      tombolAktif.setAttribute("aria-pressed", "true");

      pilihFilter(nilaiAktif);
      renderProduk(kategoriAktif, statusStokAktif);
    });
  });
}

pasangFilter(tombolFilter, (tombol) => tombol.dataset.filter, (kategori) => {
  kategoriAktif = kategori;
});

pasangFilter(tombolFilterStok, (tombol) => tombol.dataset.stockFilter, (status) => {
  statusStokAktif = status;
});