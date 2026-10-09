const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const zerar = document.querySelector("#zerar");
let i = 0;

botao.addEventListener("click", () => {
  i++;
  texto.textContent = i;
});

zerar.addEventListener("click", () => {
  i = 0;
  texto.textContent = i;
});
