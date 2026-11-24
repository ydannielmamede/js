const primeiroProduto = document.querySelector(".produto")
const btnDestacar = document.getElementById("btnDestacar")

btnDestacar.addEventListener("click", () => {
    primeiroProduto.classList.add("destaque")
})


const produtos = document.querySelectorAll(".produto")
const btnContarProdutos = document.getElementById("btnContar")
const resultado = document.getElementById("resultado")

btnContarProdutos.addEventListener("click", () => {
    resultado.textContent =  `Exitem ${produtos.length} produtos na lista`

})


