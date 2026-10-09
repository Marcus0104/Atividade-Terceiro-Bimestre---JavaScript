const titulo = document.querySelector("#titulo");

const cores = ["red", "blue", "green", "purple", "orange", "pink", "white"];
const textos = ["Marcus", "Nickollas", "Thiago", "Jefferson", "João"];
const corAleatoria = Math.floor(Math.random() * cores.length);
const textoAleatorio = Math.floor(Math.random() * textos.length);

titulo.textContent = textos[textoAleatorio];
titulo.style.color = cores[corAleatoria];

const tamanho = Math.floor(Math.random() * 71) + 30;
titulo.style.fontSize = tamanho + "px";
