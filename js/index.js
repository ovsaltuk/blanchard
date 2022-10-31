// choices
const element = document.querySelector('.filter__selection');
const choices = new Choices(element, {
  searchEnabled: false,
});

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// events swiper
const eventsSwiper = new Swiper('.events__swiper', {
  containerModifierClass: 'events__swiper-',
  slidesPerView: 'auto',
  spaceBetween: 50,
  wrapperClass: 'events__swiper-wrapper',
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
});

