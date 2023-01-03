//Burger Menu
$(function() {
  $('.menu-wrapper').on('click', function() {
      $('.hamburger-menu').toggleClass('animate');
      $('.adaptive').slideToggle();
  });
});

//Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.arrow-right',
    prevEl: '.arrow-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
    },
  }
});