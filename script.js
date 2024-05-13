const headerLogo = document.querySelector(".header__logo");
const mobileBar = document.querySelector(".mobile-bar");

// Реализация бургер меню
headerLogo.addEventListener("click", (event) => {
  mobileBar.classList.toggle("translate-x");
});

// Реализация табов для секции "Часто задаваемые вопросы"
const faqList = document.querySelector(".faq__list");
faqList.addEventListener("click", (event) => {
  let target = event.target.closest("[data-action]");

  if (!target) return;
  if (target.dataset.action == "open-faq") {
    target.closest("li").nextElementSibling.classList.remove("visually-hidden");
  }
  if (target.dataset.action == "close-faq") {
    target.closest("li").classList.add("visually-hidden");
  }
});
