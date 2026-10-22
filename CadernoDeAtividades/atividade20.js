// Atividade 20 — Interpretando posições de um array
// Considere o código:
let ferramentas = [
 "VS Code",
 "GitHub",
 "MySQL Workbench",
 "Node.js",
 "Postman"
];
console.log(ferramentas[0]);
console.log(ferramentas[2]);
console.log(ferramentas[4]);
console.log(ferramentas.length);
// Responda antes de executar:
// a) O que será apresentado em cada linha? ==> 1- VS Code; 2- MySQL Workbench; 3- Postman; 4- 5
// b) Quantos elementos existem no array? ==> 5
// c) Qual é o índice do último elemento? ==> 4
// d) O que acontece ao executar console.log(ferramentas[5])? ==> O terminal mostra undefined
// e) Como substituir "Postman" por "Insomnia"? ==> splice(4,1,"Insomnia") ou ferramentas[4] = "Insomnia"