const personagem = document.querySelector("#personagem");
const resposta = document.querySelector("#resposta");
const trocar = document.querySelector("#trocar");
const imagem1 =
  "https://assets.stickers.wiki/img/4904c5448a10f3d4b6aa98eee7a02ddf.thumb.webp";
const imagem2 =
  "https://assets.stickers.wiki/img/096fbfe8a975a0f063a89fec2a929eb5.thumb.webp";

let imagemAtual = 1;

personagem.addEventListener("mouseenter", () => {
  resposta.textContent = "Você me achou!";
});

personagem.addEventListener("mouseleave", () => {
  resposta.textContent = "Não volte mais!!";
});

personagem.addEventListener("mousemove", () => {
  resposta.textContent = "Para de me fazer cócegas";
});

personagem.addEventListener("click", () => {
  resposta.textContent = "Não me toque";
});

trocar.addEventListener("click", () => {
  if (imagemAtual == 1) {
    personagem.src = imagem2;
    imagemAtual = 2;
  } else {
    personagem.src = imagem1;
    imagemAtual = 1;
  }
});
