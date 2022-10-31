ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 15
  });
};

// choices
const element = document.querySelector('.filter__selection');
const choices = new Choices(element, {
  searchEnabled: false,
});
// gallery swiper

const swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
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
  slidesPerView: 'auto',
  spaceBetween: 50,
  wrapperClass: 'events__swiper-wrapper',
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
});

//partners swiper
const partnersSlider = new Swiper('.partners__swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.partners__swiper-button-next',
    prevEl: '.partners__swiper-button-prev',
  },
});