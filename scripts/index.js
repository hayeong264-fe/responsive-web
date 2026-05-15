var swiper = new Swiper(".culture-banner .swiper", {
    slidesPerView: 'auto', //cdn 슬라이더 너비 고정 초기화
    spaceBetween: 10,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});