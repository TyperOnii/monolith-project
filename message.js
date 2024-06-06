const messageSucceful = ` <div class="message">
<div class="message__wrapper">
  <img
    width="48"
    height="48"
    src="source/icons/message-succeful.svg"
    alt=""
    class="message__image"
  />
  <h2 class="message__title">Спасибо за обращение!</h2>
  <p class="message__descr">Мы свяжемся с вами в ближайшее время!</p>
  <button class="message__button" data-action="message-close">
    Закрыть
  </button>
</div>
</div>`;
const messageError = ` <div class="message" >
<div class="message__wrapper">
  <img
    width="48"
    height="48"
    src="source/icons/message-error.svg"
    alt=""
    class="message__image"
  />
  <h2 class="message__title">Что то пошло не так...</h2>
  <p class="message__descr">Попробуйте снова или свяжитесь с нами!</p>
  <button class="message__button" data-action="message-close">
    Закрыть
  </button>
</div>
</div>`;
const divWrapper = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  divWrapper.insertAdjacentHTML("beforeend", messageSucceful);
  overlay.hidden = !overlay.hidden;
});

document.body.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action = 'message-close']");
  if (!target && !event.target.classList.contains("overlay")) return;
  if (target) {
    const modal = target.closest(".message");
    modal.previousElementSibling.hidden = !modal.previousElementSibling.hidden;
    modal.remove();
  } else if (event.target.classList.contains("overlay")) {
    event.target.hidden = !event.target.hidden;
    divWrapper.lastElementChild.remove();
  }
});
