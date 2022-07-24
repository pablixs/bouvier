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
