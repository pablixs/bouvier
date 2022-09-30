const body = document.getElementById('body')
const loader = document.getElementById('loader')

// loader.onclick = ()=>{
//   loader.classList.add('hidden')
// }

window.onload = onPageLoad

function onPageLoad(){
  loader.classList.add('hidden')
  body.classList.remove('overflow-hidden')
}


var hamburger = document.querySelector(".hamburger");
var sidenav = document.querySelector(".sidenav")
var screendarker = document.querySelector(".screendarker")
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  sidenav.classList.toggle("w-4/6")
  screendarker.classList.toggle("hidden")
  // Do something else, like open/close menu
});

new Swiper('.swiper', {
  loop: true,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
})