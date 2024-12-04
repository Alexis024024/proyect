const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselSlide.querySelector('img').clientWidth; // Ancho de las imágenes

// Función para mover el carrusel
function moveCarousel() {
  carouselSlide.style.transform = translateX(-${counter * size}px);
}

// Botón de siguiente
nextBtn.addEventListener('click', () => {
  if (counter < carouselSlide.children.length - 1) {
    counter++;
  } else {
    counter = 0; // Vuelve al inicio si es la última imagen
  }
  moveCarousel();
});

// Botón de anterior
prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = carouselSlide.children.length - 1; // Vuelve a la última imagen si es la primera
  }
  moveCarousel();
});