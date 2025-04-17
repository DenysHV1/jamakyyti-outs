import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const processSwiper = () => {
	let processSwiper = null;

	const initProcessSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!processSwiper) {
				processSwiper = new Swiper(".swiper-process", {
					slidesPerView: 1,
					slidesPerGroup: 1,
					centeredSlides: true,
					loop: true,
					grabCursor: true,
					spaceBetween: 10,
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
						el: ".swiper-pagination-process",
						clickable: true,
					},
				});
			}
		} else {
			if (processSwiper) {
				processSwiper.destroy(true, true);
				processSwiper = null;
			}
		}
	};

	initProcessSwiper();
	window.addEventListener("resize", initProcessSwiper);
};