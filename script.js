const headerLogo = document.querySelector(".header__logo");
const mobileBar = document.querySelector(".mobile-bar");

// Реализация бургер меню
headerLogo.addEventListener("click", (event) => {
  mobileBar.classList.toggle("translate-x");
});
