$(document).ready(function() {
  AOS.init({
    duration: 800,
    mirror: true
  });

  $(".js-phone-slider").slick({
    infinite: true,
    dots: false,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});