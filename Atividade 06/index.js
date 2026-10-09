const aventura = document.querySelector("#aventura");
const botao = document.querySelector("#botao");

const acoes = ["A Busca", "A Batalha", "O Resgate"];

const locais = [
  " na Floresta Sombria",
  " no Reino Perdido",
  " na Montanha Misteriosa",    
];

const complementos = [
  " do Dragão",
  " do Tesouro Esquecido",
  " da Espada Ancestral",
];

botao.addEventListener("click", () => {
  const numeroLocais = Math.floor(Math.random() * 3);
  const local = locais[numeroLocais];

  const numeroAcoes = Math.floor(Math.random() * 3);
  const acao = acoes[numeroAcoes];

  const numeroComplementos = Math.floor(Math.random() * 3);
  const complemento = complementos[numeroComplementos];

  aventura.textContent = acao + local + complemento;
});
