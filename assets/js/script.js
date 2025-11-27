'use strict';

/* toggle element helper */
const elemToggle = (elem) => elem.classList.toggle("active");

/* elements */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

/* open menu */
navOpenBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  overlay.classList.add("active");
});

/* close menu */
navCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

/* close when clicking overlay */
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

/* close when clicking nav links */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

/* mobile dropdown */
document.querySelectorAll(".navbar-dropdown > .navbar-link").forEach(link => {
  link.addEventListener("click", function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("open");
    }
  });
});
