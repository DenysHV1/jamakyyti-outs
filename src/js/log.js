import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const logSwiper = () => {
	let logSwiper = null;

	const initLogSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!logSwiper) {
				logSwiper = new Swiper(".swiper-log", {
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
						el: ".swiper-pagination-log",
						clickable: true,
					},
				});
			}
		} else {
			if (logSwiper) {
				logSwiper.destroy(true, true);
				logSwiper = null;
			}
		}
	};

	initLogSwiper();
	window.addEventListener("resize", initLogSwiper);
};