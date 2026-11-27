const aviso = document.getElementById("aviso")
const btnTema = document.getElementById("btnTema")
const btnDestacar = document.getElementById("btnDestacar")
const btnRemover = document.getElementById("btnRemover")


btnTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro")
})

btnDestacar.addEventListener("click", () => {
    aviso.classList.add("destaque")
})
btnRemover.addEventListener("click", () => {
    aviso.classList.remove("destaque")
})


console.log(window.innerWidth);
console.log(window.location.href);