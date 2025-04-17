import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const experienceSwiper = () => {
	let experienceSwiper = null;

	const initExperienceSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!experienceSwiper) {
				experienceSwiper = new Swiper(".swiper-experience", {
					slidesPerView: 1,
					slidesPerGroup: 1,
centeredSlides: false,
					loop: false,
					grabCursor: true,
					spaceBetween: 24,
					speed: 800,
					simulateTouch: true,
					touchRatio: 1,
					mousewheel: {
						sensitivity: 0.5,
					},
					keyboard: {
						enabled: true,
						onlyInViewport: true,
					},
					pagination: {
						el: ".swiper-pagination-experience",
						clickable: true,
					},
				});
			}
		} else {
			if (experienceSwiper) {
				experienceSwiper.destroy(true, true);
				experienceSwiper = null;
			}
		}
	};

	initExperienceSwiper();
	window.addEventListener("resize", initExperienceSwiper);
};