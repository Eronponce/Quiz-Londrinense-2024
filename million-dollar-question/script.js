// Respostas corretas para cada questão
const correctAnswers = {
    1: 'AUSTRALIA',
    2: 'JAPAN',
    3: 'ITALY'
};

// Objeto para rastrear as respostas do usuário
let userAnswers = {};

// Função para mostrar a mensagem e verificar as respostas
function mostrarMensagem(questionNumber, selectedAnswer) {
    const questionDiv = document.getElementById('question' + questionNumber);
    const messageElement = questionDiv.querySelector('.mensagem');

    if (selectedAnswer === correctAnswers[questionNumber]) {
        messageElement.textContent = 'Correct!';
        messageElement.style.backgroundColor = '#d4edda';
        messageElement.style.borderColor = '#c3e6cb';
        messageElement.style.color = '#155724';
        userAnswers[questionNumber] = true;
    } else {
        messageElement.textContent = 'Incorrect. Try again!';
        messageElement.style.backgroundColor = '#f8d7da';
        messageElement.style.borderColor = '#f5c6cb';
        messageElement.style.color = '#721c24';
        userAnswers[questionNumber] = false;
    }
    messageElement.style.display = 'block';

    // Verificar se todas as respostas estão corretas
    if (Object.keys(userAnswers).length === 3 && Object.values(userAnswers).every(value => value === true)) {
        document.getElementById('nextButton').style.display = 'block';
    }
}
