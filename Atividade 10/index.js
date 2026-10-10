const imagens = [
    "https://picsum.photos/id/237/600/400",
    "https://picsum.photos/id/238/600/400",
    "https://picsum.photos/id/239/600/400",
    "https://picsum.photos/id/240/600/400"
]
const btnAnterior = document.querySelector("#antes");
const btnProxima = document.querySelector("#proxima");
const imagem = document.querySelector("#imagem");

let i = 0;

function trocarImagem() {
    imagem.src = imagens[i];

    i++;
    if (i == imagens.length) {
        i = 0;
    }
}

function anterior() {
    i--;

    if (i < 0) {
        i = imagens.length - 1;
    }

    imagem.src = imagens[i];
}

function proxima() {
    i++;

    if (i == imagens.length) {
        i = 0;
    }

    imagem.src = imagens[i];
}

btnAnterior.addEventListener("click", () => {
    anterior();
});

btnProxima.addEventListener("click", () => {
    proxima();
});

imagem.src = imagens[i];
setInterval(trocarImagem, 5000);
