const menuIconSelector = document.querySelector("#x-icon");
const navbar = document.querySelector(".header-nav ul");
const mobileNav = document.querySelector(".mobile-nav");

menuIconSelector.addEventListener("click", () => {
  menuIconSelector.classList.toggle("bx-x");
  menuIconSelector.classList.toggle("bx-menu");
  mobileNav.classList.toggle("closed");
});
