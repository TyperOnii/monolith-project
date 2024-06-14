const cardNumber = document.getElementById("card-number");
const cardDate = document.getElementById("card-date");
const formPay = document.getElementById("form-pay");

cardDate.addEventListener("input", (event) => {
  const valueLength = cardDate.value;
  if (valueLength.length == 2) {
    cardDate.value += "/";
    return;
  }
  if (valueLength.length == 3 && event.data == null) {
    cardDate.value = "";
  }
});
