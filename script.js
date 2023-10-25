const swiper1 = new Swiper('.swiper1', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: '4',
  spaceBetween: '2%',

  navigation: {
    nextEl: '.nextEl1',
    prevEl: '.prevEl1',
  },

});

const swiper2 = new Swiper('.swiper2', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: '4',
  spaceBetween: '2%',

  navigation: {
    nextEl: '.nextEl2',
    prevEl: '.prevEl2',
  },

});

const swiper3 = new Swiper('.swiper3', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: '4',
  spaceBetween: '2%',

  navigation: {
    nextEl: '.nextEl3',
    prevEl: '.prevEl3',
  },

});

let registerBtn = document.querySelectorAll(".register");
let signinBtn = document.querySelectorAll(".signin");
let searchBtn = document.querySelectorAll(".search");
let latestBtn = document.querySelectorAll(".latest");
let genresBtn = document.querySelectorAll(".genres");
let modalReg = document.querySelector(".modalReg");
let greyOut = document.querySelectorAll(".greyOut");
let modalInfo = document.querySelector(".modalInfo");
let movie = document.querySelectorAll(".swiper-slide");


function disableScroll() { 
    document.body.classList.add("stopScrolling"); 
} 

function enableScroll() { 
    document.body.classList.remove("stopScrolling"); 
} 

registerBtn.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modalReg.style.display = "block";
    disableScroll()
})})

signinBtn.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modalReg.style.display = "block";
    disableScroll()
})})

movie.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modalInfo.style.display = "block";
    disableScroll()
})})

greyOut.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    modalReg.style.display = "none";
    modalInfo.style.display = "none";
    enableScroll()
})})