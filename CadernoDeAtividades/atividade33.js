// Atividade 33 — Funções com arrays
// Crie as seguintes funções para trabalhar com uma lista de números:
// • calcularSoma(numeros): retorna a soma dos elementos.
// • contarPares(numeros): retorna a quantidade de números pares.
// • encontrarMaior(numeros): retorna o maior elemento.
// • buscarNumero(numeros, valor): retorna true se o valor existir no array e false caso 
// contrário.
// Utilize o seguinte array para testar:
let numeros = [12, 7, 24, 9, 31, 18, 5, 42];
// As funções deverão percorrer o array utilizando estruturas de repetição. Não utilize métodos 
// prontos que resolvam diretamente os cálculos solicitados.

const calcularSoma = numeros => {
  let soma = 0;
  for (const numero of numeros) {
    soma += numero
  }
  return soma
}
const contarPares = numeros => {
  let pares = 0;
  for (const numero of numeros) {
    if (numero % 2 === 0) {
      pares++
    }
  }
  return pares
};
const encontrarMaior = numeros => {
  let maior = numeros[0]
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i]
    }
  }
  return maior
}
const buscarNumero = (numeros, valor) => {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros.includes(valor)) {
      return true
    } else {
      return false
    }

  }
}


console.log(calcularSoma(numeros))
console.log(contarPares(numeros))
console.log(encontrarMaior(numeros))
console.log(buscarNumero(numeros, 42))
