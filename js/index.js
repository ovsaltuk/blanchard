// yandex map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.758468, 37.601088],
      zoom: 14
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icons/pointer.svg',
    iconImageSize: [20, 20]
});
myMap.geoObjects.add(myPlacemark);

};


// choices
const element = document.querySelector('.filter__selection');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});
// gallery swiper

const gallerySwiper = new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
  // slidesPerGroup: 3,
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
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  slidesPerView: 'auto',
  wrapperClass: 'events__swiper-wrapper',
  navigation: {
    nextEl: '.events__swiper-btn-next',
    prevEl: '.events__swiper-btn-prev',
  },
});

//partners swiper
const partnersSlider = new Swiper('.partners__swiper', {
  slidesPerView: 'auto',
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

//submenu

let submenuBtn = document.querySelectorAll('.submenu__item-btn');
let artDirectionLists = document.querySelectorAll('.art-directions__list');

submenuBtn.forEach(function(el){
  el.addEventListener('click', function(){
    el.parentNode.querySelector('.art-directions__list').classList.toggle('art-directions__list--active');
  })
});

window.onclick = function(event) {  
  if (!event.target.matches('.submenu__item-btn')) {  
    let dropdowns = document.getElementsByClassName("art-directions__list");  
    let i;  
    for (i = 0; i < dropdowns.length; i++) {  
      let openDropdown = dropdowns[i];  
      if (openDropdown.classList.contains('art-directions__list--active')) {  
        openDropdown.classList.remove('art-directions__list--active');  
      }  
    }  
  }  
};

//scroll to anchor

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//tultip 

tippy('#tultip-first', {
  content: 'My tooltip!',
});

tippy('#tultip-second', {
  content: 'My tooltip!',
});

tippy('#tultip-third', {
  content: 'My tooltip!',
});




