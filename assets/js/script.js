'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const overlay = document.querySelector(".overlay");

  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    navbar.classList.add("active");
    overlay.classList.add("active");
  }
}

// Handle dropdowns on mobile
document.querySelectorAll(".navbar-dropdown > .navbar-link").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
  });
});

// Open menu
document.querySelector('.nav-open-btn').onclick = function() {
  document.querySelector('.navbar').classList.add('active');
};
// Close menu
document.querySelector('.nav-close-btn').onclick = function() {
  document.querySelector('.navbar').classList.remove('active');
};



