const quizesContainer = document.querySelector(".quiz");

quizesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".form-quistions__actions")) return;
  let currentQuiz = target.closest(".form-quistions");
  if (
    target.closest(".button-continue") &&
    currentQuiz.nextElementSibling.classList.contains("form-quistions")
  ) {
    console.log(currentQuiz.nextElementSibling);
    currentQuiz.nextElementSibling.hidden =
      !currentQuiz.nextElementSibling.hidden;
    currentQuiz.hidden = !currentQuiz.hidden;
  } else if (
    target.closest(".button-back") &&
    currentQuiz.previousElementSibling.classList.contains("form-quistions")
  ) {
    currentQuiz.previousElementSibling.hidden =
      !currentQuiz.previousElementSibling.hidden;
    currentQuiz.hidden = !currentQuiz.hidden;
  }
  return;
});

// quizesContainer.addEventListener("click", (event) => {
//   const target = event.target.closest(".form-quistions__actions");
//   if (!target.closest(".form-quistions__actions")) return;
//   let currentQuiz = target.closest(".form-quistions");
//   // console.log(currentQuiz);
//   if (
//     target.closest(".button-continue") &&
//     currentQuiz.nextElementSibling.classList.contains("form-quistions")
//   ) {
//     console.log(currentQuiz.nextElementSibling);
//     console.log(target);
//   }
// });
