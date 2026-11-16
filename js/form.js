(() => {
  const form = document.querySelector("#form-kontak");
  const preview = document.querySelector("#preview-form");
  const formFeedback = document.querySelector("#form-feedback");
  const ringkasan = document.querySelector("#ringkasan-error");
  const hitungPesan = document.querySelector("#hitung-pesan");

  if (!form || !preview || !formFeedback) return;

  const fields = ["nama", "email", "telepon", "paket", "pesan", "setuju"].map((id) =>
    document.querySelector(`#${id}`),
  );
  const topikInputs = document.querySelectorAll('input[name="topik"]');
  const topikError = document.querySelector("#topik-error");
  const PREVIEW_AWAL = "Data form akan muncul setelah tombol dikirim.";
  const NAMA_FIELD = {
    nama: "Nama lengkap",
    email: "Email",
    telepon: "Nomor telepon",
    paket: "Paket",
    pesan: "Pesan",
    setuju: "Persetujuan",
  };
  let sudahCoba = false;


  function getFieldError(field) {
    const validity = field.validity;
    const isiTeks = field.type !== "checkbox" && field.tagName !== "SELECT";
    const nilai = field.value.trim();

    if (validity.valueMissing || (isiTeks && nilai === "")) {
      return field.type === "checkbox"
        ? "Centang persetujuan terlebih dahulu."
        : "Bagian ini wajib diisi.";
    }
    if (validity.typeMismatch) return "Format email belum sesuai, contoh: nama@email.com.";
    if (validity.tooShort || (field.minLength > 0 && nilai.length < field.minLength)) {
      return `Isi minimal ${field.minLength} karakter.`;
    }
    if (validity.patternMismatch) {
      return "Format nomor belum sesuai, contoh: 081234567890 atau +6281234567890.";
    }

    return "";
  }

  function tampilkanError(field, pesan) {
    const error = document.querySelector(`#${field.id}-error`);
    field.setCustomValidity(pesan);
    field.setAttribute("aria-invalid", pesan ? "true" : "false");

    if (error) {
      error.textContent = pesan;
    }
  }

  function validasiField(field) {
    field.setCustomValidity("");
    const pesan = getFieldError(field);
    tampilkanError(field, pesan);
    return pesan === "";
  }

  function validasiTopik() {
    const valid = Array.from(topikInputs).some((input) => input.checked);
    topikError.textContent = valid ? "" : "Pilih salah satu topik pertanyaan.";
    topikInputs.forEach((input) => {
      input.setAttribute("aria-invalid", valid ? "false" : "true");
    });
    return valid;
  }

  function kumpulkanError() {
    const daftar = fields
      .filter((field) => field.getAttribute("aria-invalid") === "true")
      .map((field) => ({
        target: field,
        label: NAMA_FIELD[field.id],
        pesan: document.querySelector(`#${field.id}-error`).textContent,
      }));

    if (topikError.textContent !== "") {
      daftar.push({ target: topikInputs[0], label: "Topik pertanyaan", pesan: topikError.textContent });
    }
    return daftar;
  }

  function tampilkanRingkasan() {
    const daftar = kumpulkanError();
    ringkasan.replaceChildren();

    if (daftar.length === 0) {
      ringkasan.hidden = true;
      return;
    }

    const judul = document.createElement("p");
    judul.textContent = `Ada ${daftar.length} isian yang perlu diperbaiki:`;

    const list = document.createElement("ul");
    daftar.forEach(({ target, label, pesan }) => {
      const item = document.createElement("li");
      const tautan = document.createElement("a");
      tautan.href = `#${target.id}`;
      tautan.textContent = `${label}: ${pesan}`;
      tautan.addEventListener("click", (event) => {
        event.preventDefault();
        target.focus();
      });
      item.append(tautan);
      list.append(item);
    });

    ringkasan.append(judul, list);
    ringkasan.hidden = false;
  }

  function perbaruiHitungan() {
    if (hitungPesan) {
      const panjang = form.elements.pesan.value.trim().length;
      hitungPesan.textContent = `${panjang} karakter (minimal ${form.elements.pesan.minLength})`;
    }
  }

  // ---------- Preview ----------

  function tampilkanPreview() {
    const data = new FormData(form);
    const baris = [
      `Nama: ${data.get("nama").trim()}`,
      `Email: ${data.get("email").trim()}`,
      `Telepon: ${data.get("telepon").trim()}`,
      `Paket: ${data.get("paket")}`,
      `Topik: ${data.get("topik")}`,
    ];

    if (data.get("waktu-kontak")) {
      baris.push(`Waktu kontak: ${data.get("waktu-kontak")}`);
    }
    baris.push(`Pesan: ${data.get("pesan").trim()}`);

    preview.textContent = baris.join("\n");
    preview.classList.add("status-success");

    formFeedback.textContent = "Form valid. Preview berhasil dibuat.";
    formFeedback.classList.add("success");
    tampilkanRingkasan();
  }

  function kosongkanPreview() {
    preview.textContent = PREVIEW_AWAL;
    preview.classList.remove("status-success");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sudahCoba = true;

    const semuaValid = fields.map((field) => validasiField(field)).every(Boolean);
    const topikValid = validasiTopik();

    if (!semuaValid || !topikValid || !form.checkValidity()) {
      formFeedback.textContent = "Periksa kembali bagian yang ditandai.";
      formFeedback.classList.remove("success");
      kosongkanPreview();
      tampilkanRingkasan();
      form.reportValidity();
      form.querySelector("input:invalid, select:invalid, textarea:invalid")?.focus();
      return;
    }

    tampilkanPreview();
  });

  function cekUlang(event) {
    const target = event.target;
    if (target === form.elements.pesan) perbaruiHitungan();

    if (target.name === "topik") {
      if (topikError.textContent !== "") {
        validasiTopik();
        tampilkanRingkasan();
      }
      return;
    }
    if (fields.includes(target) && target.getAttribute("aria-invalid") === "true") {
      validasiField(target);
      tampilkanRingkasan();
    }
  }
  form.addEventListener("input", cekUlang);
  form.addEventListener("change", cekUlang);

  form.addEventListener("focusout", (event) => {
    const target = event.target;
    if (!fields.includes(target) || target.type === "checkbox") return;
    if (!sudahCoba && target.value.trim() === "") return;

    validasiField(target);
    if (!ringkasan.hidden) tampilkanRingkasan();
  });

  form.addEventListener("reset", () => {
    sudahCoba = false;
    fields.forEach((field) => tampilkanError(field, ""));
    topikError.textContent = "";
    topikInputs.forEach((input) => input.setAttribute("aria-invalid", "false"));
    formFeedback.textContent = "";
    formFeedback.classList.remove("success");
    kosongkanPreview();
    tampilkanRingkasan();
    setTimeout(perbaruiHitungan, 0);
  });

  // ---------- Preferensi kontak (localStorage) ----------

  const STORAGE_KEY = "kopi-nusa-preferensi-kontak";
  const tombolSimpan = document.querySelector("#simpan-preferensi");
  const tombolHapus = document.querySelector("#hapus-preferensi");
  const statusPreferensi = document.querySelector("#status-preferensi");
  const jsonPreferensi = document.querySelector("#json-preferensi");
  const channelInputs = document.querySelectorAll('input[name="channel"]');

  function tampilkanStatus(teks, berhasil) {
    statusPreferensi.textContent = teks;
    statusPreferensi.classList.toggle("success", berhasil);
  }

  function tampilkanJSON(preferensi) {
    jsonPreferensi.textContent = preferensi
      ? JSON.stringify(preferensi, null, 2)
      : "Belum ada data tersimpan.";
  }

  function simpanPreferensi() {
    const data = new FormData(form);
    const channel = document.querySelector('input[name="channel"]:checked');
    const preferensi = {
      paket: data.get("paket") || "",
      topik: data.get("topik") || "",
      channel: channel ? channel.value : "",
      updatedAt: new Date().toISOString(),
    };

    if (!preferensi.paket && !preferensi.topik && !preferensi.channel) {
      tampilkanStatus("Pilih paket, topik, atau channel kontak dulu sebelum menyimpan.", false);
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferensi));
      tampilkanJSON(preferensi);
      tampilkanStatus("Preferensi disimpan di browser ini.", true);
    } catch (error) {
      console.warn("Preferensi gagal disimpan.", error);
      tampilkanStatus("Preferensi gagal disimpan. Penyimpanan browser mungkin dinonaktifkan.", false);
    }
  }

  function pilihRadio(inputs, nilai) {
    inputs.forEach((input) => {
      input.checked = input.value === nilai;
    });
  }

  function muatPreferensi() {
    try {
      const tersimpan = localStorage.getItem(STORAGE_KEY);
      if (!tersimpan) return;

      const preferensi = JSON.parse(tersimpan);
      if (typeof preferensi !== "object" || preferensi === null) {
        throw new Error("Bentuk data preferensi tidak sesuai.");
      }

      const paket = document.querySelector("#paket");
      const adaDiDaftar = Array.from(paket.options).some((opsi) => opsi.value === preferensi.paket);
      paket.value = adaDiDaftar ? preferensi.paket : "";
      pilihRadio(topikInputs, preferensi.topik);
      pilihRadio(channelInputs, preferensi.channel);

      tampilkanJSON(preferensi);
      tampilkanStatus("Preferensi sebelumnya sudah dimuat.", true);
    } catch (error) {
      console.warn("Preferensi tidak valid.", error);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
      }
      tampilkanJSON(null);
    }
  }

  function hapusPreferensi() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      channelInputs.forEach((input) => {
        input.checked = false;
      });
      tampilkanJSON(null);
      tampilkanStatus("Preferensi yang tersimpan sudah dihapus.", true);
    } catch (error) {
      console.warn("Preferensi gagal dihapus.", error);
      tampilkanStatus("Preferensi tidak bisa dihapus saat ini.", false);
    }
  }

  perbaruiHitungan();
  tombolSimpan?.addEventListener("click", simpanPreferensi);
  tombolHapus?.addEventListener("click", hapusPreferensi);
  muatPreferensi();
})();