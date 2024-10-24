document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
  
    // Captura as respostas do usuário
    const userAnswer1 = document.getElementById('answer1').value.trim().toLowerCase();
    const userAnswer2 = document.getElementById('answer2').value.trim().toLowerCase();
    const userAnswer3 = document.getElementById('answer3').value.trim().toLowerCase();
  
    // Respostas corretas
    const correctAnswers = [
      'eu gosto de peixe',
      'eu amo meu gato',
      'ele joga minecraft'
    ];
  
    let score = 0;
    let feedback = '';
  
    // Função para remover acentos
    function removeAcentos(text) {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  
    // Verifica cada resposta
    if (removeAcentos(userAnswer1) === removeAcentos(correctAnswers[0])) {
      score++;
      feedback += '<p>Questão 1: Correto!</p>';
    } else {
      feedback += `<p>Questão 1: Incorreto. `;
    }
  
    if (removeAcentos(userAnswer2) === removeAcentos(correctAnswers[1])) {
      score++;
      feedback += '<p>Questão 2: Correto!</p>';
    } else {
      feedback += `<p>Questão 2: Incorreto. `;
    }
  
    if (removeAcentos(userAnswer3) === removeAcentos(correctAnswers[2])) {
      score++;
      feedback += '<p>Questão 3: Correto!</p>';
    } else {
      feedback += `<p>Questão 3: Incorreto.`;
    }
  
    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    if (score === 3) {
        window.location.href = 'parabens.html'; // Redireciona para outra página se todas as respostas estiverem corretas
    } else {
        resultDiv.innerHTML = `<h2>Você acertou ${score} de 3 questões.</h2>${feedback}`;
    }

  });
  