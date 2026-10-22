// Atividade 15 — Somando números pares
// Crie um programa que utilize for para percorrer os números de 1 até 100 e calcular a soma de 
// todos os números pares desse intervalo.
// O programa deverá apresentar:
// • A soma final.
// • A quantidade de números pares encontrados.
// Não informe os resultados manualmente: ambos devem ser calculados pelo código


let soma = 0;
let pares = 0;

for (let i = 1; i <= 100; i++) {
    soma += i


    if (i % 2 === 0) {
        pares++

    }

}

console.log(`Soma final: ${soma}`);
console.log(`Quantidade de pares: ${pares}`);

