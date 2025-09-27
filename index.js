// 1. Kalkulator Estimasi Harga Sederhana (Hero Section)
document.addEventListener("DOMContentLoaded", () => {
  const jumlahHtInput = document.getElementById("jumlah-ht");
  const jumlahHariInput = document.getElementById("jumlah-hari");
  const estimasiHargaSpan = document.getElementById("estimasi-harga");
  const HARGA_PER_UNIT_HARIAN = 25000; // Harga dasar per unit per hari (Paket Standar)
  const HARGA_PER_UNIT_PREMIUM = 22000; // Harga diskon premium

  function hitungEstimasi() {
    let jumlahHT = parseInt(jumlahHtInput.value) || 0;
    let jumlahHari = parseInt(jumlahHariInput.value) || 0;
    let hargaPerUnit = HARGA_PER_UNIT_HARIAN;

    //          if (jumlahHT >= 10) {
    //          hargaPerUnit = HARGA_PER_UNIT_PREMIUM; // Terapkan diskon paket group
    //        } else if (jumlahHari >= 5) {
    // Contoh: Diskon 15% untuk sewa 5 hari ke atas
    //            hargaPerUnit = HARGA_PER_UNIT_HARIAN * 0.85;
    //          }

    let total = jumlahHT * jumlahHari * hargaPerUnit;

    // Format ke Rupiah
    estimasiHargaSpan.textContent = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(total);

    // Update link WhatsApp dengan detail pesanan (Opsional)
    const waLink = document.querySelector(".cta-pulse");
    if (waLink) {
      const message = `Halo, saya ingin sewa ${jumlahHT} unit HT selama ${jumlahHari} hari. Total estimasi: ${estimasiHargaSpan.textContent}.`;
      waLink.href = `https://wa.me/6282115466796?text=${encodeURIComponent(message)}`;
    }
  }

  // Jalankan hitungEstimasi saat input berubah atau dimuat
  jumlahHtInput.addEventListener("input", hitungEstimasi);
  jumlahHariInput.addEventListener("input", hitungEstimasi);
  hitungEstimasi(); // Panggil saat dimuat untuk menampilkan hasil awal

  // 2. Interaktivitas Accordion FAQ
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector("span");

      // Toggle display konten
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.textContent = "−"; // Ganti ikon menjadi minus
      } else {
        content.classList.add("hidden");
        icon.textContent = "+"; // Ganti ikon menjadi plus
      }
    });
  });
});
