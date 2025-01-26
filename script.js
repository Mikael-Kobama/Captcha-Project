// Selecionando os elementos do HTML que vamos manipular.
let captcha = document.querySelector(".captcha"); // Captcha onde o código será exibido.
let reloadBtn = document.querySelector(".reload-btn"); // Botão de recarregar o captcha.
let inputField = document.querySelector("input"); // Campo onde o usuário digita o código.
let checkBtn = document.querySelector(".check-btn"); // Botão para verificar o código.
let statusTxt = document.querySelector(".status-text"); // Texto que exibe a mensagem de sucesso ou erro.

// Lista com todos os caracteres possíveis (letras e números) que podem aparecer no captcha.
let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

// Quando o botão "check" é clicado, o evento é acionado.
checkBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o comportamento padrão do botão (não recarregar a página).

  // Torna visível a área de status e cria a verificação do captcha.
  statusTxt.style.display = "block";

  // Captura o valor digitado pelo usuário e o transforma em uma string limpa.
  let inputVal = inputField.value.split("").join("");

  // Compara o valor digitado com o valor exibido no captcha.
  if (inputVal == captcha.innerText) {
    // Caso o captcha esteja correto, exibe uma mensagem de sucesso.
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice, Captcha Matched";

    // Após 4 segundos, limpa o status e recarrega o captcha.
    setTimeout(() => {
      statusTxt.style.display = ""; // Esconde a mensagem de status.
      captcha.innerText = ""; // Limpa o texto do captcha.
      getCaptcha(); // Gera um novo captcha.
    }, 4000);
  } else {
    // Caso o captcha esteja errado, exibe uma mensagem de erro.
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please Try Again Later";
  }
});

// Função para gerar um novo captcha com 6 caracteres aleatórios.
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    // O captcha terá 6 caracteres.
    // Seleciona um caractere aleatório da lista allCharacters.
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += `${randomChar}`; // Adiciona o caractere ao captcha exibido.
  }
}

// Quando o botão "reload" é clicado, recarrega o captcha.
reloadBtn.addEventListener("click", () => {
  captcha.innerHTML = ""; // Limpa o captcha atual.
  getCaptcha(); // Gera um novo captcha.
});
