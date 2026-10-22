// Atividade 31 — Encontrando o erro de escopo 
// Analise o código: 
function calcularDistancia(velocidade, tempo) { 
let distancia  velocidade * tempo; 
} 
calcularDistancia(60, 2); 
console.log(distancia); 
// a) Identifique o problema relacionado ao escopo da variável. ==> a variavel distância está presa no escopo da função
// b) Explique por que a variável declarada dentro da função não está disponível diretamente 
// fora dela. ==> a variável distância foi declarada dentro da função, então ela só existe dentro do escopo da função
// c) Corrija a função para retornar a distância. 
// d) Armazene o resultado em uma variável e apresente a distância percorrida em quilômetros. 