(function ($) {
  'use strict';

  const $iphoneImgSmall = $('.js-iphone-img-small');
  const $iphoneImgBig = $('.js-iphone-img-big');
  const $navLink = $('.js-nav-link');
  const $root = $('html, body');

  init();

  function init () {
    $iphoneImgSmall.addClass('is-shown');
    $iphoneImgBig.addClass('is-shown');
    $navLink.on('click', handleNavigation);
    // $(window).on('scroll', handleScroll);
  }

  function handleNavigation (e) {
    e.preventDefault();

    const href = $.attr(this, 'href');

    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, () => {
      window.location.hash = href;
    });
  }

  // function handleScroll () {}

})(jQuery);
