document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      // spaceBetween: 0,
      breakpoints : {
        1135: {
          slidesPerView: 2,
        }
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });