console.log("Iniciando programa...");

try {
    let resultado = 10/0
    console.log(resultado);
    // Erro proposital:
    console.log(nomeUsuario);
}catch (erro) {
    console.log("Ocorreu um erro!");
    console.log(erro.message);
}
console.log("Programa finalizado!");
