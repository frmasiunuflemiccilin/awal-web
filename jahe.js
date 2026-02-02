
  // Kita pakai contoh API berita gratis (GNews atau NewsAPI biasanya populer)
  const API_URL = 'https://newsapi.org/v2/top-headlines?category=health&apiKey=KODE_API_KAKAK';

  async function ambilArtikelOnline() {
    try {
      // Ayana lagi 'berlayar' ke internet buat ambil data... ⛵
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // Kita ambil daftar artikelnya
      const articles = data.articles;
      
      // Pilih satu artikel secara acak biar beda-beda terus
      const randomArt = articles[Math.floor(Math.random() * articles.length)];

      // Update tampilannya!
      document.getElementById('card-title').innerText = randomArt.title;
      document.getElementById('card-desc').innerText = randomArt.description || "Klik buat baca selengkapnya...";
      document.getElementById('card-category').innerText = "Berita Terbaru";
      
      // Kalau ada gambarnya, bisa diganti juga
      if(randomArt.urlToImage) {
        document.getElementById('card-img').src = randomArt.urlToImage;
      }

      console.log("Artikel berhasil diperbarui! ✨");
    } catch (error) {
      console.error("Aduh, ada masalah pas ambil data:", error);
    }
}

  // Jalankan setiap 1 menit (60000 ms)
  setInterval(ambilArtikelOnline, 60000);

  // Panggil pertama kali pas halaman dibuka
  ambilArtikelOnline();
