import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperFaq = () => {
  new Swiper('.swiper-faq', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        // spaceBetween: -15,
      },
      1440: {
        slidesPerView: 3.51,
      },
    },
  });
};

export default swiperFaq;
