/* This function create a new class for to give another style for nav section */
function myFunction() {
  document.getElementById("myNav").classList.toggle("newNavCSS");
}


/* Navbar stcky: Create a fixed navbar with diferent style*/
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav_sticky");
  nav.classList.toggle("sticky", window.scrollY > 0);
})