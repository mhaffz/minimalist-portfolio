const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});