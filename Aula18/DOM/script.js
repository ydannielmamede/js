const nome = document.getElementById("nome")
const mensagem = document.getElementById("mensagem")
const btnNome = document.getElementById("btnNome")
const bntMensagem = document.getElementById("btnMensagem")


btnNome.addEventListener("click", () => {
    nome.textContent = "Carlos"
    nome.classList.add("nome-alterado")
})

bntMensagem.addEventListener("click", () => {
    mensagem.innerHTML = "<p>Bem-vindo, <strong>estudante!</strong></p>";
})


console.log(console.log);
