
let caunt = ['1', '2', '3'];
let art = ['Julius Caesar', 'Into the Abyss', 'Discobolous'];
let price = ['157', '95', '221'];
let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '">' + ('#0' + (caunt[index])) + ' ' +
        '<span class="pagination-art">' + (art[index]) + '</span>' + ' ' +
        '<span class="pagination-price">' + '<span>' + (price[index] + ' ETH') + '</span>' + '</span>'
        + "</p>";
    },
  },


});