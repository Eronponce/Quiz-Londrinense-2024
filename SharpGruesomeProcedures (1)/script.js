const colorBox = document.getElementById('color-box');
const options = document.querySelectorAll('.option');
const feedbackMessage = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score');

let score = 0;


const colors = [
  { color: 'red', name: 'Red' },
  { color: 'blue', name: 'Blue' },
  { color: 'green', name: 'Green' },
  { color: 'yellow', name: 'Yellow' },
  { color: 'purple', name: 'Purple' },
  { color: 'orange', name: 'Orange' }
];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function loadNewColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor.color;
  colorBox.dataset.name = randomColor.name;

  let optionsList = [randomColor, ...getRandomColors(2)];
  shuffle(optionsList);

  options.forEach((option, index) => {
    option.textContent = optionsList[index].name;
  });

  feedbackMessage.textContent = ''; 
}


function getRandomColors(num) {
  const shuffledColors = colors.filter(color => color.name !== colorBox.dataset.name);
  shuffle(shuffledColors);
  return shuffledColors.slice(0, num);
}


function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const correctAnswer = colorBox.dataset.name;

  if (selectedOption === correctAnswer) {
    feedbackMessage.textContent = 'Correct!';
    feedbackMessage.style.color = 'green';
    score++;
  } else {
    feedbackMessage.textContent = 'Try Again!';
    feedbackMessage.style.color = 'red';
  }

  scoreDisplay.textContent = score;
  setTimeout(loadNewColor, 1000); 
  if(score ==10 ){
    window.location.href = '../Trabalho Londrinense Tech/index.html';
  }
}


options.forEach(option => {
  option.addEventListener('click', checkAnswer);
});


loadNewColor();