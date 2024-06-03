// toggle class active hamburger menu
const menuBar = document.querySelector('.menu-bar');
//toggle class active search
// ketika hamburger menu diklik
document.querySelector('#hamburger_menu').onclick = () => {
    menuBar.classList.toggle('active');
};
const searchForm = document.querySelector('.search_form');
const searchBox = document.querySelector('#search-box');
// ketika search-button diklik
document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};
//klik diluar elemen
const hm = document.querySelector('#hamburger_menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !menuBar.contains(e.target)){
        menuBar.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});

var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides:true,
    autoplay:{
        delay:5500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });