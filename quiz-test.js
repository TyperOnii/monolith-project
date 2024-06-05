let questions = [
  {
    isdouble: true,
    a1: "input",
    a2: "customcheckbox",
    quizNumber: "01",
    q1: "Введите желаемую площадь дома",
    q2: "Этажность",
    answersInputs: ["1", "2", "3", "4+"],
    placeholder: ".....м²",
  },
  {
    isdouble: true,
    a1: "basecheckbox",
    a2: "input",
    quizNumber: "02",
    q1: "Материал стен",
    q2: "Высота дома",
    answersInputs: ["Кирпич", "Газоблок", "Дерево", "Другое"],
    placeholder: "0-9 м",
  },
  {
    isdouble: true,
    a1: "basecheckbox",
    a2: "basecheckbox",
    quizNumber: "03",
    q1: "Отделка фасадов",
    q2: "Фундамент",
    answersInputs: ["Кирпич", "Газоблок", "Дерево", "Другое"],
    anwersInputsSecond: [
      "Ленточный",
      "Ленточный бурозабивной",
      "Монолитная плита",
      "Винтовой",
    ],
  },
  {
    isdouble: true,
    a1: "basecheckbox",
    a2: "basecheckbox",
    quizNumber: "04",
    q1: "Гараж",
    q2: "Баня",
    answersInputs: [
      "В доме",
      "Отдельно",
      "Открытая парковка",
      "Парковка с навесом",
      "Не нужен",
    ],
    anwersInputsSecond: ["В доме", "Отдельно", "Не нужна"],
  },
  {
    isdouble: true,
    a1: "basecheckbox",
    a2: "basecheckbox",
    quizNumber: "05",
    q1: "Терасса",
    q2: "Бассейн",
    answersInputs: ["Слита с домом", "Отдельно от дома"],
    anwersInputsSecond: [
      "В доме",
      "На улице открытый",
      "На улице крытый",
      "Не нужен",
    ],
  },
  {
    isdouble: false,
    a1: "input",
    a2: null,
    quizNumber: "06",
    q1: "Предполагаемая площадь земельного участка",
    q2: null,
    placeholder: "0-999 соток",
  },
];

let questionsIndex = 0;

const quizNumber = document.getElementById("quiz-number");
const titleContainerFirst = document.getElementById("title-first");
const titleContainerSecond = document.getElementById("title-second");
const quizContentFirstWrapper = document.getElementById("quiz-content-first");
const quizContentSecondWrapper = document.getElementById("quiz-content-second");
const buttonBack = document.querySelector(".button-back");
const buttonContinue = document.querySelector(".button-continue");

function clearContent() {
  quizNumber.innerHTML = "";
  titleContainerFirst.innerHTML = "";
  titleContainerSecond.innerHTML = "";
  quizContentFirstWrapper.innerHTML = "";
  quizContentSecondWrapper.innerHTML = "";
}

// renderQuistions();

function renderQuistions() {
  let answer1 = null;
  let answer2 = null;
  let question1 = null;
  let question2 = null;
  for (prop in questions[questionsIndex]) {
    if (prop == "isdouble" && questions[questionsIndex][prop] == true) {
      question1 = forLoop("q1");
      question2 = forLoop("q2");
      answer1 = forLoop("a1");
      answer2 = forLoop("a2");
    }
    if (prop == "isdouble" && questions[questionsIndex][prop] == false) {
      question1 = forLoop("q1");
      answer1 = forLoop("a1");
    }
  }
  console.log(answer1);
  console.log(answer2);
  console.log(question1);
  console.log(question2);

  if (answer2 && question2) {
    //     Генерация Номера
    quizNumber.textContent = questions[questionsIndex]["quizNumber"];

    //     Генерация вопроса 1
    titleContainerFirst.innerHTML = createTemplate(
      "q1",
      questionsIndex,
      questions[questionsIndex]["q1"]
    );

    //     Генерация вопроса 2
    titleContainerSecond.innerHTML = createTemplate(
      "q2",
      questions[questionsIndex]["q2"]
    );

    //     1-ый квиз
    if (questionsIndex === 0) {
      quizContentFirstWrapper.innerHTML = createTemplate(
        answer1,
        questionsIndex
      );
      //     Генерация вариантов ответа 2
      createTemplate(answer2, questionsIndex, quizContentSecondWrapper);
      questionsIndex++;
      return;
    }

    if (questionsIndex === 1) {
      createTemplate(answer1, questionsIndex, quizContentFirstWrapper);
      quizContentSecondWrapper.innerHTML = createTemplate(
        answer2,
        questionsIndex
      );
    }
  }
}

function forLoop(value) {
  let a;
  for (item in questions[questionsIndex]) {
    if (item === value) {
      a = questions[questionsIndex][item];
      break;
    }
  }
  return a;
}

function createTemplate(type, index, place) {
  if (type === "q1") {
    //   Вопрос
    const titleTemplate = ` <h3 class="form-quistions__title">%title%</h3>`;

    const titleFirst = titleTemplate.replace(
      "%title%",
      questions[questionsIndex]["q1"]
    );

    return titleFirst;
  }
  if (type === "q2") {
    //   Вопрос
    const titleTemplate = ` <h3 class="form-quistions__title">%title%</h3>`;

    const titleSecond = titleTemplate.replace(
      "%title%",
      questions[questionsIndex]["q2"]
    );
    return titleSecond;
  }

  if (type === "input") {
    //   Базовый инпут
    const inputTemplate = `<label for="input" class="form-quistions__label">
  <input
    type="number"
    id="input"
    class="form-quistions__input"
    placeholder="%placeholder%"
    required
  />
 </label>`;

    const inputBase = inputTemplate.replace(
      "%placeholder%",
      questions[questionsIndex]["placeholder"]
    );
    return inputBase;
  }
  if (type === "customcheckbox") {
    //   Кастомный чекбокс
    const checkboxCustomTemplate = `<div class="form-quistions__checkbox-wrapper">
    <label for=%value1% class="form-quistions__label">
          <input
          type="checkbox"
          id=%value1%
          class="form-quistions__checkbox"
           />
          <span class="form-quistions__custom-checkbox">%value1%</span>
    </label>
  </div>`;

    for (item of questions[questionsIndex]["answersInputs"]) {
      let checkboxCustom = checkboxCustomTemplate.replaceAll("%value1%", item);
      place.insertAdjacentHTML("beforeend", checkboxCustom);
    }
  }
  if (type === "basecheckbox") {
    //    Базовый чекбокс
    const checkboxBaseTemplate = `<label for="floor-one" class="form-quistions__label">
  <input
  type= %value2%
  id= %value2%
  class="form-quistions__checkbox form-quistions__checkbox--base"
  />
  %value2%
</label>`;
    for (item of questions[questionsIndex]["answersInputs"]) {
      let checkboxBase = checkboxBaseTemplate.replaceAll("%value2%", item);
      place.insertAdjacentHTML("beforeend", checkboxBase);
    }

    return checkboxBase;
  }
}

// //   Вопрос
// const titleTemplate = ` <h3 class="form-quistions__title">%title%</h3>`;

// const titleFirst = titleTemplate.replace(
//   "%title%",
//   questions[questionsIndex]["questionFirst"]
// );
// const titleSecond = titleTemplate.replace(
//   "%title%",
//   questions[questionsIndex]["questionSecond"]
// );

// //   Базовый инпут
// const inputTemplate = `<label for="input" class="form-quistions__label">
//  <input
//    type="number"
//    id="input"
//    class="form-quistions__input"
//    placeholder="%placeholder%"
//    required
//  />
// </label>`;

// const inputBase = inputTemplate.replace(
//   "%placeholder%",
//   questions[questionsIndex]["placeholder"]
// );

//   Кастомный чекбокс
// const checkboxCustomTemplate = `<div class="form-quistions__checkbox-wrapper">
//     <label for="floor-one" class="form-quistions__label">
//           <input
//           type="checkbox"
//           id="floor-one"
//           class="form-quistions__checkbox"
//            />
//           <span class="form-quistions__custom-checkbox">%value1%</span>
//     </label>
//  </div>`;

// const checkboxCustom = checkboxCustomTemplate.replace(
//   "%value1%",
//   questions[questionsIndex]["answersInputs"]
// );

//    Базовый чекбокс
// const checkboxBaseTemplate = `<label for="floor-one" class="form-quistions__label">
//     <input
//     type="checkbox"
//     id="floor-one"
//     class="form-quistions__checkbox form-quistions__checkbox--base"
//     />
//     %value2%
// </label>`;

// const checkboxBase = checkboxBaseTemplate.replace(
//   "%value2%",
//   questions[questionsIndex]["answersInputs"]
// );

buttonContinue.addEventListener("click", (event) => {
  questionsIndex++;
  renderQuistions();
});
buttonBack.addEventListener("click", (event) => {
  questionsIndex--;
  renderQuistions();
});

function checker(value) {
  if (value === "input") {
  }
}
