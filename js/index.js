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
  itemSelectText: '',
});
// gallery swiper

const gallerySwiper = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
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
  slidesPerView: 3,
  spaceBetween: 50,
  wrapperClass: 'events__swiper-wrapper',
  navigation: {
    nextEl: '.events__swiper-btn-next',
    prevEl: '.events__swiper-btn-prev',
  },
});

//partners swiper
const partnersSlider = new Swiper('.partners__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  // centeredSlides: true,
  navigation: {
    nextEl: '.partners__swiper-btn-next',
    prevEl: '.partners__swiper-btn-prev',
  },
});



//tabs catalogue

let tabsNavBtn = document.querySelectorAll('.tabs__nav-btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsNavBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsNavBtn.forEach(function(btn){btn.classList.remove('tabs__nav-btn--active')});
    e.currentTarget.classList.add('tabs__nav-btn--active');

    tabsItem.forEach(function(element){element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');

  });
});

//accordion catalogue

new Accordion('.catalogue__accordion');


