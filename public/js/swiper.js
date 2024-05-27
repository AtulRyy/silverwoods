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