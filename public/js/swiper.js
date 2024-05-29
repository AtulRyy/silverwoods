var swiper = new Swiper(".cards", {
    slidesPerView: 3, // Show three slides
    // centeredSlides: true, // Center the active slide
    spaceBetween: 0, // Space between slides
    slidesPerGroup: 3,
    // initialSlide: 1,
    autoplay: {
        delay: 3000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Keep autoplay running even after user interaction
      },
  });

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.amenities-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay:{
            delay:3000,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});