// Atividade 29 — Identificando o problema com return 
// Observe o programa: 
function calcularDobro(numero) { 
    console.log(numero * 2);
    console.log(numero * 3);
    
    return numero * 2;
} 
let resultado = calcularDobro(10); 
console.log(`Resultado armazenado: ${resultado}`); 


// a) O que será apresentado no terminal? ==> undefined
// b) Por que a variável resultado não armazena o dobro de 10? ==> a função calcularDobro não retorna nenhum valor, apenas imprime o resultado
// c) Reescreva a função utilizando return. 
// d) Faça o programa apresentar o dobro e o triplo do mesmo número, utilizando a função para 
// obter os resultados.