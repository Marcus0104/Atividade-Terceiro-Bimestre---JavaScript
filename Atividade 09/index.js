sabor.addEventListener("input", () => {
  const texto = sabor.value.trim().toLowerCase();

  if (texto.length > 3) {
    if (texto === "chocolate") {
      resposta.textContent = "Aí sim! Chocolate é bom demais!";
    } else if (texto === "flocos") {
      resposta.textContent = "Flocos é clássico, hein!";
    } else if (texto === "morango") {
      resposta.textContent = "Morango é uma delícia! ";
    } else if (texto === "baunilha") {
      resposta.textContent = "Simples, mas muito gostoso!";
    } else {
      resposta.textContent = "Hmm, nunca provei esse sabor!";
    }
  } else {
    resposta.textContent = "Digita um pouquinho mais aí!";
  }
});
modoescuro.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
});
