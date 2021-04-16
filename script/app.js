function myFunction() {
  document.getElementById("myNav").classList.toggle("newNavCSS");
}

/* Navbar stcky */
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav_sticky");
  nav.classList.toggle("sticky", window.scrollY > 0);
})