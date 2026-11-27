const nome = document.getElementById("cliente")
const produtoValor = document.getElementById("produto")

const quantidade = Number(document.getElementById("quantidade"))
const btnCalcular = document.getElementById("btnCalcular")

const resultado = document.getElementById("resultado")
const mensagem = document.getElementById("mensagem")
const resumo = document.getElementById("resumo")

const btnTema = document.getElementById("btnTema")

function calcularPedido() {
    if (nome === "" || produtoValor.value === ""|| !Number.isInteger(quantidade.value)|| quantidade.value < 0 ) {
        mensagem.textContent = "Preencha todos os campos corretamente"
        mensagem.classList.remove("sucesso")
        mensagem.classList.add("erro")
        resultado.classList.add("oculto")
        
        return
    }
    
    const nomeProduto = produtoValor.options[produtoValor.selectedIndex].textContent
    
    resumo.innerHTML = `
    <p>Cliente: <strong>${nome.value}</strong></p>
    <p>Produto: <strong>${nomeProduto}</strong></p>
    <p>Quantidade: <strong>${quantidade.value}</strong></p>
    <h3>Total: ${produtoValor.value*quantidade.value}<h3>
    `;
    
    mensagem.textContent = "Pedido calculado com sucesso!"
    mensagem.classList.remove("erro")
    mensagem.classList.add("sucesso")
    resultado.classList.remove("oculto")
}

function alternarTema() {
    document.body.classList.toggle("escuro")
}

function limparPedidos() {
    const campos = document.querySelectorAll("input")

    campos.forEach(campo => {
        campo.value = ""

    });
    mensagem.textContent = ""
    resumo.innerHTML = ""
    mensagem.classList.remove("erro", "sucesso")
    resultado.classList.add("oculto")
    nome.focus()
}


btnCalcular.addEventListener("click", () => {
    calcularPedido()
})

btnTema.addEventListener("click", () => {
    alternarTema()
})

