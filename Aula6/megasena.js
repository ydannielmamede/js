const { question } = require("readline-sync");
console.clear()

let resultado = []

for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random() * 60) + 1;
    resultado.push(numero)
    
}


let aposta = [];

console.log("===== MINHA APOSTA DA MEGA-SENA =====");

while (aposta.length < 6) {
    let numero = Number(question("Digite um numero entre 1 e 60: "))

    if (numero < 1 || numero > 60 || !Number.isInteger(numero)) {
        console.log("Numero invalido! Digite um inteiro entre 1 e 60: ");
    } else if (aposta.indexOf(numero) !== -1) {
        console.log("Voce ja escolheu esse numero! Digite outro: ");
    } else {
        aposta.push(numero)
        console.log("Numero Registrado!");
    }
}

//2. exibir a aposta do usuario
console.log("\n ===== SUA APOSTA =====");
console.log(aposta);


//3. exibir o resultado do sorteio
console.log("\n ===== RESULTADO DO SORTEIO =====");
console.log(resultado);

//4. comparar os numeros das casas iguais
let acertos = 0;
let numerosAcertados = [];

for (let i = 0; i < aposta.length; i++) {
    for (let j = 0; j < resultado.length; j++) {
        if (aposta[i] === resultado[j]) {
            acertos++
            numerosAcertados.push(aposta[i])
        }
    }
}

//5. exibir os numeros acertados

console.log("\n ===== RESULTADO DA APOSTA =====");

if (acertos > 0) {
    console.log("Numeros acetados: ");
    for (let i = 0; i < numerosAcertados.length; i++) {
        console.log(numerosAcertados[i]);
    }
} else {
    console.log("Voce nao acertou nenhum numero.")
}


//7. informar a classificacao

if (acertos === 6) {
    console.log("Parabens! Voce acertou a SENA!");
}else if (acertos === 5) {
    console.log("Parabens! Voce acertou a QUINA!");
}
else if (acertos === 4) {
    console.log("Parabens! Voce acertou a QUADRA!");
}else{
    console.log("Voce nao atingiu a faixa de premiacao da atividade");
    
}
console.log("\n Fim do programa!");


