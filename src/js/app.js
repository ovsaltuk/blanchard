import * as oveFunctions from "./modules/functions.js";
import SimpleBar from 'simplebar';



oveFunctions.isWebp();


// yandex map
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758468, 37.601088],
            controls: [],
            zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/map-pointer.png',
          iconImageSize: [20 , 20]
      });
      myMap.geoObjects.add(myPlacemark);
    }


//hero-swiper
import Swiper from 'swiper/bundle';
const swiper = new Swiper('.hero-swiper__container', {
  slideClass: 'hero-swiper__slide',
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  loop: true,
  allowTouchMove: false,
});

//gallery-swiper

const gallerySwiper = new Swiper ('.gallery__swiper',{
  slideClass: "gallery__swiper-slide",
  wrapperClass: "gallery__swiper-wrapper",
  spaceBetween: 50,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {

    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },
 
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },

    1023: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
   
    1390: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

});

//events swiper

const eventsSwiper = new Swiper ('.events__swiper', {
  slideClass: "events__swiper-slide",
  wrapperClass: "events__swiper-wrapper",
  slidesPerView: 1,
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {

 
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1023: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },
   
    1390: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  
});

//projects swiper

const projectsSwiper = new Swiper ('.projects__swiper', {
  slideClass: "projects__swiper-slide",
  wrapperClass: "projects__swiper-wrapper",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  breakpoints: {
    470: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      centeredSlides: false,
    },

    1023: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      centeredSlides: false
    },
   
    1390: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      centeredSlides: false
    }
  },
  
});



//burger menu 
const menu = document.querySelector(".menu");
const bodyWrapper = document.querySelector("body");
document.querySelector(".burger-btn").addEventListener('click', function(){
  menu.classList.add("menu_active");
  bodyWrapper.classList.add("body-wrapper_menu-open");
});

document.querySelector(".menu__close-btn").addEventListener('click', function(){
  menu.classList.remove("menu_active");
  bodyWrapper.classList.remove("body-wrapper_menu-open");
})

// searching form header
const searchingForm = document.querySelector(".search__form");
const searchFormCloseBtn = document.querySelector(".search__form-close-btn");

document.querySelector(".search__button").addEventListener('click', function(){
  searchingForm.classList.remove("search__form_disable");
  searchingForm.classList.add("search__form_active");
});
searchFormCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchingForm.classList.add("search__form_disable");
})

// anchor scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove("menu_active");
        bodyWrapper.classList.remove("body-wrapper_menu-open");
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//simplebar

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
})

//submenu 

const btns = document.querySelectorAll(".submenu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown_active";
const activeClassbtns = "submenu_btn_active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

//choices
import Choices from 'choices.js';

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

//accordion 

import Accordion from 'accordion-js';
new Accordion('.accordion-container');

// tabs 

let tabsBtn = document.querySelectorAll('.accordion__ac-text-item-btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('accordion__ac-text-item-btn--active')});
    e.currentTarget.classList.add('accordion__ac-text-item-btn--active');

    tabsItem.forEach(function(element){element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

// tultip

import tippy from 'tippy.js';
tippy('#tultipFirst', {
  content: 'Пример современных тенденций современная методология разработки!',
  theme: 'blanchard'
});
tippy('#tultipSecond', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'blanchard'
});
tippy('#tultipThird', {
  content: 'В стремлении повысить качество',
  theme: 'blanchard'
});

//form 
import Inputmask from "inputmask";
import JustValidate from "just-validate";

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("99-9999999");

im.mask(selector);





















