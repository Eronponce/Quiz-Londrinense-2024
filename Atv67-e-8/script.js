let palavrasEncontradas = [];

function verifica() {
  let input = document.getElementById("input").value.toLowerCase().trim();
  console.log(input);

  let outputs = {
    "hopscotch": document.getElementById("output1"),
    "rabbit": document.getElementById("output2"),
    "fish": document.getElementById("output3"),
    "ball": document.getElementById("output4"),
    "kid": document.getElementById("output5"),
    "lollipop": document.getElementById("output6"),
    "toy": document.getElementById("output7"),
    "school": document.getElementById("output8"),
    "pen": document.getElementById("output9"),
    "lego": document.getElementById("output10")
  };

  if (outputs[input] && !palavrasEncontradas.includes(input)) {
    outputs[input].value += input + "\n";
    palavrasEncontradas.push(input);
    document.getElementById("input").value = ""; // Limpa o campo de entrada
  } 

  if (palavrasEncontradas.length >= 4) {
    document.getElementById("nextButton").disabled = false;
  }
}

function proximaPagina() {
  // Redireciona para a próxima página
  window.location.href = "../Aula-2406-Quiz-2oTentativa/index.html";
}
