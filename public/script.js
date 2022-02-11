"use strict";

const burgerMenu = document.querySelector(".burgerMenu");
const closeMenu = document.querySelector(".closeMenu");
const dropdown = document.querySelector(".dropdown");

[burgerMenu, closeMenu].forEach((el) => {
  el.addEventListener("click", () => {
    burgerMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("opacity-100");
    dropdown.classList.toggle("-z-10");
    dropdown.classList.toggle("z-10");
    dropdown.classList.toggle("-translate-y-full");
    dropdown.classList.toggle("translate-y-0");
  });
});
