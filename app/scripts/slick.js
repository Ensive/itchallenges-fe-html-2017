(function () {
  'use strict';

  const $carousel = $('.js-carousel');
  const options = {
    arrows: false,
    appendDots: '.js-carousel-dots',
    dots: true,
    mobileFirst: true,
    slide: '.customer__item'
  };

  init();

  function init () {
    $carousel.slick(options);
  }

})();
