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
})
