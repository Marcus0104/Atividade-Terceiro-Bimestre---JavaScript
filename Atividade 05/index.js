const lista = document.querySelector(".lista");
const botao = document.querySelector("#botao");

let i = 0;
botao.addEventListener("click", () => {
  i++;

  const linha = document.createElement("li");
  linha.textContent = "Item n° " + i;

  lista.appendChild(linha);
});
