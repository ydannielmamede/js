// Atividade 28 — Parâmetros e retorno 
// Complete as funções a seguir. 
function calcularAreaRetangulo(largura, altura) {
    let area = largura * altura;
    return area;
}
function calcularPerimetroRetangulo(largura, altura) {
    let perimetro = largura * 2 + altura * 2;
    return perimetro;
}
let areaCalculada = calcularAreaRetangulo(8, 5);
let perimetroCalculado = calcularPerimetroRetangulo(8, 5);
console.log(`Área: ${areaCalculada}`);
console.log(`Perímetro: ${perimetroCalculado}`);
// Após completar, explique a diferença entre os parâmetros largura e altura e os argumentos 8 e
// 5 utilizados na chamada. 