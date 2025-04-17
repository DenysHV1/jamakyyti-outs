import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const cabinsSwiper = () => {
  let cabinsSwiper = null;

  const initCabinsSwiper = () => {
    if (window.innerWidth < 1440) {
      if (!cabinsSwiper) {
        cabinsSwiper = new Swiper('.swiper-cabins', {
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
            el: '.swiper-pagination-cabins',
            clickable: true,
          },
        });
      }
    } else {
      if (cabinsSwiper) {
        cabinsSwiper.destroy(true, true);
        cabinsSwiper = null;
      }
    }
  };

  initCabinsSwiper();
  window.addEventListener('resize', initCabinsSwiper);
};
