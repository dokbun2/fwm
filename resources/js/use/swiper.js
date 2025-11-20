var swiper = new Swiper(".itemSwiper .swiper-container", {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	navigation: {
		nextEl: ".itemSwiper .swiper-button-next",
        prevEl: ".itemSwiper .swiper-button-prev",
    },		
});

var swiper2 = new Swiper(".itemSwiper2 .swiper-container", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	navigation: {
		nextEl: ".itemSwiper2 .swiper-button-next",
        prevEl: ".itemSwiper2 .swiper-button-prev",
    },		
});