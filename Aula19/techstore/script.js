const nome = document.getElementById("nome")
const btnSaudar = document.getElementById("btnSaudar")
const mensagem = document.getElementById("mensagem")

btnSaudar.addEventListener("click", () => {
    if (nome.value.trim() === "") {
        alert("Não deixe o campo vazio")
    }else {
        mensagem.textContent = `Olá, ${nome.value}! Seja bem-vindo!`
    }
})
console.log(nome.value);


const btnTitulo = document.getElementById("btnTitulo")
const titulo = document.getElementById("titulo")

btnTitulo.addEventListener("click", () => {
    titulo.textContent = "Ofertas TechStore"
})

const primeiroCard = document.querySelector(".card")
const btnPrimeiro = document.getElementById("btnPrimeiro")

btnPrimeiro.addEventListener("click",() => {
    primeiroCard.classList.toggle("destaque")
})



const cards = document.querySelectorAll(".card")

const btnTodos = document.getElementById("btnTodos")

btnTodos.addEventListener("click", () => {
    cards.forEach(card => {
        card.classList.add("destaque")
    });
})

const btnRemover = document.getElementById("btnRemover")

btnRemover.addEventListener("click", () => {
    cards.forEach(card => {
        card.classList.remove("destaque")
    });
})