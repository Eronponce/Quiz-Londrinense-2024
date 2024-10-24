const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Rafael", "Vincent van Gogh", "Leonardo da Vinci"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "The more you take, the more you have?",
    options: ["A hole", "A photo", "All are correct", "The time"],
    correctAnswer: "All are correct"
  },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = ''; // Limpa as opções anteriores
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      // Usuário acertou todas as questões
      questionElement.textContent = "Parabéns! Você acertou todas as questões.";
      optionsElement.innerHTML = '';

      // Botão para ir para ../index.html
      const proceedButton = document.createElement('button');
      proceedButton.textContent = 'Continuar';
      proceedButton.classList.add('proceed-button');
      proceedButton.addEventListener('click', () => {
        window.location.href = '../Jogo Bob esponja/index.html';
      });
      optionsElement.appendChild(proceedButton);
    }
  } else {
    // Usuário errou, reinicia o quiz
    alert("Resposta incorreta! O quiz será reiniciado.");
    currentQuestionIndex = 0;
    loadQuestion();
  }
}

// Carrega a primeira pergunta
loadQuestion();
