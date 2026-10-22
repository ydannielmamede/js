// Atividade 30 — Criando funções de conversão 
// Desenvolva três funções: 
// • celsiusParaFahrenheit(celsius): converte uma temperatura Celsius para Fahrenheit. 
// • quilometrosParaMetros(quilometros): converte quilômetros para metros. 
// • minutosParaSegundos(minutos): converte minutos para segundos. 
// Cada função deverá receber um parâmetro e retornar o resultado calculado.
//     Depois, chame cada função com pelo menos três valores diferentes e apresente os resultados 
// com template strings.
// Pesquise as fórmulas de conversão e aplique ao seu código.


const celsiusParaFahrenheit = celsius => {
    return celsius * 1.8 + 32
}
const quilometrosParaMetros = quilometros => {
    return quilometros * 1000
}
const minutosParaSegundos = minutos =>{
    return minutos * 60
}

console.log(celsiusParaFahrenheit(30));
console.log(celsiusParaFahrenheit(100));
console.log(celsiusParaFahrenheit(50));

console.log(quilometrosParaMetros(1));
console.log(quilometrosParaMetros(10));
console.log(quilometrosParaMetros(100));

console.log(minutosParaSegundos(1));
console.log(minutosParaSegundos(60));
console.log(minutosParaSegundos(100));



