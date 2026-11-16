(() => {
  const form = document.querySelector("#form-newsletter");
  const status = document.querySelector("#status-newsletter");
  const tombolHapus = document.querySelector("#hapus-newsletter");

  if (!form || !status) return;

  const KUNCI = "kopi-nusa-newsletter";
  const PILIHAN_MINAT = ["promo", "produk-baru", "acara"];
  const PILIHAN_FREKUENSI = ["mingguan", "bulanan"];

  const minatInputs = form.querySelectorAll('input[name="minat"]');
  const frekuensi = form.elements.frekuensi;
  const keluaran = document.querySelector("#json-newsletter");
  const minatError = document.querySelector("#minat-error");
  const frekuensiError = document.querySelector("#frekuensi-error");

  function tampilkanStatus(teks, berhasil) {
    status.textContent = teks;
    status.classList.toggle("success", berhasil);
  }

  function tampilkanJSON(data) {
    if (keluaran) {
      keluaran.textContent = data ? JSON.stringify(data, null, 2) : "Belum ada data tersimpan.";
    }
  }

  function formatWaktu(teks) {
    const waktu = new Date(teks);
    if (Number.isNaN(waktu.getTime())) return "";
    return waktu.toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" });
  }

  // Data dibaca kembali dari string JSON. Kalau bentuknya tidak sesuai, dianggap kosong.
  function bacaPilihan() {
    try {
      const mentah = localStorage.getItem(KUNCI);
      if (mentah === null) return null;

      const data = JSON.parse(mentah);
      const minatValid =
        Array.isArray(data.minat) &&
        data.minat.length > 0 &&
        data.minat.every((m) => PILIHAN_MINAT.includes(m));

      return minatValid && PILIHAN_FREKUENSI.includes(data.frekuensi) ? data : null;
    } catch {
      return null;
    }
  }

  function ambilMinat() {
    return Array.from(minatInputs)
      .filter((input) => input.checked)
      .map((input) => input.value);
  }

  function tampilkanError() {
    const pesanMinat = ambilMinat().length === 0 ? "Pilih minimal satu jenis kabar." : "";
    const pesanFrekuensi = frekuensi.value === "" ? "Pilih seberapa sering Anda ingin menerima kabar." : "";

    minatError.textContent = pesanMinat;
    minatInputs.forEach((input) => input.setAttribute("aria-invalid", pesanMinat ? "true" : "false"));
    frekuensiError.textContent = pesanFrekuensi;
    frekuensi.setAttribute("aria-invalid", pesanFrekuensi ? "true" : "false");

    if (pesanMinat) {
      minatInputs[0].focus();
    } else if (pesanFrekuensi) {
      frekuensi.focus();
    }
    return pesanMinat === "" && pesanFrekuensi === "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!tampilkanError()) {
      tampilkanStatus("Pilihan belum disimpan, periksa bagian yang ditandai.", false);
      return;
    }

    const data = {
      minat: ambilMinat(),
      frekuensi: frekuensi.value,
      disimpan: new Date().toISOString(),
    };

    try {
      localStorage.setItem(KUNCI, JSON.stringify(data));
      tampilkanJSON(data);
      tampilkanStatus(`Pilihan disimpan pada ${formatWaktu(data.disimpan)}.`, true);
    } catch (error) {
      console.warn("Pilihan newsletter gagal disimpan.", error);
      tampilkanStatus("Pilihan gagal disimpan. Penyimpanan browser mungkin dinonaktifkan.", false);
    }
  });

  form.addEventListener("change", (event) => {
    if (event.target.name === "minat" && ambilMinat().length > 0) {
      minatError.textContent = "";
      minatInputs.forEach((input) => input.setAttribute("aria-invalid", "false"));
    }
    if (event.target.name === "frekuensi" && frekuensi.value !== "") {
      frekuensiError.textContent = "";
      frekuensi.setAttribute("aria-invalid", "false");
    }
  });

  tombolHapus?.addEventListener("click", () => {
    try {
      localStorage.removeItem(KUNCI);
      form.reset();
      tampilkanJSON(null);
      minatError.textContent = "";
      frekuensiError.textContent = "";
      tampilkanStatus("Pilihan yang tersimpan sudah dihapus.", true);
    } catch (error) {
      console.warn("Pilihan newsletter gagal dihapus.", error);
      tampilkanStatus("Pilihan tidak bisa dihapus saat ini.", false);
    }
  });

  // Saat halaman dibuka lagi, form diisi dari data yang tersimpan.
  const tersimpan = bacaPilihan();
  if (tersimpan) {
    minatInputs.forEach((input) => {
      input.checked = tersimpan.minat.includes(input.value);
    });
    frekuensi.value = tersimpan.frekuensi;
    tampilkanJSON(tersimpan);

    const waktu = formatWaktu(tersimpan.disimpan);
    tampilkanStatus(
      waktu ? `Pilihan terakhir disimpan pada ${waktu}.` : "Pilihan yang tersimpan sudah dimuat.",
      true,
    );
  }
})();
