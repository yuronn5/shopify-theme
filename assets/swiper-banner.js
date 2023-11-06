const slidesArray = document.querySelectorAll(".mc__bannerSlide");
const spaceBetweenSlides = slidesArray.length * 10;
const swiper = new Swiper(".swiper_banner", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: slidesArray.length,
      spaceBetween: spaceBetweenSlides,
    },
  },
});
