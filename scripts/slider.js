// Скрипт для слайдера
const sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;

sliderImages[currentSlide].classList.add('active');

setInterval(() => {
  sliderImages[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide === sliderImages.length) {
    currentSlide = 0;
  }
  sliderImages[currentSlide].classList.add('active');
}, 5000);
