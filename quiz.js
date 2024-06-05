const quizesContainer = document.querySelector(".quiz-section");

quizesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".form-quistions__actions")) return;
  let currentQuiz = target.closest(".quiz");
  if (
    target.closest(".button-continue") &&
    currentQuiz.nextElementSibling.classList.contains("quiz")
  ) {
    currentQuiz.nextElementSibling.hidden =
      !currentQuiz.nextElementSibling.hidden;
    currentQuiz.hidden = !currentQuiz.hidden;
  } else if (
    target.closest(".button-back") &&
    currentQuiz.previousElementSibling.classList.contains("quiz")
  ) {
    currentQuiz.previousElementSibling.hidden =
      !currentQuiz.previousElementSibling.hidden;
    currentQuiz.hidden = !currentQuiz.hidden;
  }
  return;
});
