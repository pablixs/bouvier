var hamburger = document.querySelector(".hamburger");
var aside = document.querySelector('.aside')
var maincontent = document.querySelector('.main-content')

// home

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active"); 
  aside.classList.toggle("hidden")
});

