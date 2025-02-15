// Ambil elemen yang dibutuhkan
const startButton = document.getElementById('startButton');
const landing = document.getElementById('landing');
const slideshow = document.getElementById('slideshow');
const bgAudio = document.getElementById('bgAudio');

startButton.addEventListener('click', function() {
  // Sembunyikan halaman pembuka dan tampilkan slideshow
  landing.classList.add('hidden');
  slideshow.classList.remove('hidden');
  // Mulai memutar lagu
  bgAudio.play();
  // Mulai slideshow
  startSlideshow();
});

// Logika slideshow
let currentIndex = 0;
const images = slideshow.getElementsByTagName('img');
const totalImages = images.length;
const slideInterval = 3000; // 3000ms = 3 detik per slide

function startSlideshow() {
  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
  }, slideInterval);
}