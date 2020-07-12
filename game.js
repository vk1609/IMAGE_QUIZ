(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for every question
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each answer
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // by join function we can show the output as one string
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // to know that answers from the user are right
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }
    });
    // result of the quiz
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Considering VAriables
  //consider two arrays one for images and another for calling the images as questions
  var images = {
    Q1: "q1.jpg",
    Q2: "q2.jpg",
    Q3: "q3.jpg",
    Q4: "q4.jpg",
    Q5: "q5.jpg",
    Q6: "q6.jpg",
  };
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "<img src='q1.jpg' height = 230 width = 500 ;/>",
      answers: {
        a: "ul",
        b: "ol",
        c: "ll",
      },
      correctAnswer: "a",
    },
    {
      question: "<img src='q2.jpg' height = 230 width = 500 />",
      answers: {
        a: "!DOCTYPE html",
        b: "#include<stdio.h>",
        c: "we can do html without any tag",
      },
      correctAnswer: "a",
    },
    {
      question: "<img src='q3.jpg' height = 230 width = 500 />",
      answers: {
        a: "Paint brush",
        b: "Colour pen",
        c: "CSS",
      },
      correctAnswer: "c",
    },
    {
      question: "<img src='q4.gif' height = 230 width = 500 />",
      answers: {
        a: "head",
        b: "h6",
        c: "h1",
      },
      correctAnswer: "c",
    },
    {
      question: "<img src='q5.gif' height = 230 width = 500 />",
      answers: {
        a: "in",
        b: "mm",
        c: "pc",
      },
      correctAnswer: "c",
    },
    {
      question: "<img src='q6.gif' height = 230 width = 500 />",
      answers: {
        a: "Selector",
        b: "Property",
        c: "both a and b",
      },
      correctAnswer: "a",
    },
  ];

  // 
  buildQuiz();
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
// showing questions in slide
  showSlide(currentSlide);

 //clicking the buttons according to slides
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
