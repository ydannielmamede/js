function somar(a, b) {
    let resultado = a + b
    console.log(`O resultado da soma de ${a} + ${b} é: ${resultado}`);
}
function subtrair(a, b) {
    let resultado = a - b
    console.log(`O resultado da subtração de ${a} - ${b} é: ${resultado}`);
}
function multiplicar(a, b) {
    let resultado = a * b
    console.log(`O resultado da multiplicação de ${a} * ${b} é: ${resultado}`);
}
function dividir(a, b) {
    let resultado = a / b
    if (b !== 0) {
        console.log(`O resultado da divisão de ${a} / ${b} é: ${resultado}`);

    } else {
        console.log("Impossivel dividir por zero");
    }
}

somar(10, 20)
subtrair(14, 210)
multiplicar(11, 15)
dividir(122, 90)
dividir(32, 0)