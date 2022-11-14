let searchBtn = document.querySelector('.header__searching-form-search-btn');
let searchingForm = document.querySelector('.header__searching-form ');
let searchingFormCloseBtn = document.querySelector('.header__searching-form-close-btn');

searchBtn.addEventListener('click', function(){
  searchingForm.classList.add('header__searching-form--active');
});

searchingFormCloseBtn.addEventListener('click', function(){
  searchingForm.classList.remove('header__searching-form--active');
})