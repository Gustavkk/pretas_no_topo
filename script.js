/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------
  // Animação do botão "Entrar"
  // ---------------------------
  const button = document.querySelector('.btn-enter');
  if (button) {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 150);
    });
  }

  // ---------------------------
  // Lógica do carrossel
  // ---------------------------
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.toggle('active', index === currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  }

  if (images.length > 0) {
    updateCarousel();
  }

  // -----------------------------------------------------
  // Lógica do botão "Entrar para a comunidade no Telegram"
  // -----------------------------------------------------
  const telegramBtn = document.getElementById('btn-telegram');
  const qrContainer = document.getElementById('qr-code-container');

  if (telegramBtn && qrContainer) {
    telegramBtn.addEventListener('click', () => {
      qrContainer.style.display = 'block';     // Mostra o QR Code e link
      telegramBtn.style.display = 'none';      // Esconde o botão após clique
    });
  }
});