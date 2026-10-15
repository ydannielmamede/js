const { question } = require("readline-sync")

function calcularDobro(num) {
    return num*2
}

let resultadoDobrado = calcularDobro(Number(question("Digite um numero para dobrar: ")))
console.log(`Resultado dobrado: ${resultadoDobrado}`);
console.log(`Resultado dobrado x3: ${resultadoDobrado * 3}`);

