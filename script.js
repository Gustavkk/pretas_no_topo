/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // Aplica animação ao clicar no botão Entrar
  const button = document.querySelector('.btn-enter');
  if (button) {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 150);
    });
  }

  // Carrossel de imagens com setas
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  // Atualiza a imagem visível
  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.toggle('active', index === currentIndex);
    });
  }

  // Avança para a próxima imagem
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  }

  // Volta para a imagem anterior
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  }

  // Inicializa o carrossel mostrando a primeira imagem
  if (images.length > 0) {
    updateCarousel();
  }
});
