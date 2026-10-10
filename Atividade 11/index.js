    const formulario = document.querySelector("#formulario")
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const confirmacao = document.querySelector("#confirmacao")
    const mostrarSenha = document.querySelector("#mostrarSenha")
    const mensagem = document.querySelector("#mensagem")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    mostrarSenha.addEventListener("change", () => {
    const tipo = mostrarSenha.checked ? "text" : "password";

    senha.type = tipo;
    confirmacao.type = tipo;
});
    formulario.addEventListener("submit", (event) => {

    event.preventDefault()

    if (nome.value.length < 3) {
        mensagem.textContent = "O nome deve possuir pelo menos 3 caracteres."
        return
    }

    if (!emailRegex.test(email.value)) {
        mensagem.textContent = "E-mail inválido."
        return
    }

    if (!senhaRegex.test(senha.value)) {
        mensagem.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial."
        return
    }

    if (senha.value !== confirmacao.value) {
        mensagem.textContent = "As senhas não coincidem."
        return
    }

    mensagem.textContent = "Cadastro realizado com sucesso!"

})