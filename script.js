const images = document.querySelectorAll('.carousel-section img');
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 6000);

  function forgotPassword() {
    alert('For security reasons, please contact our customer support at 1-800-CHINA-BANK (244-6222) to reset your password.');
  }