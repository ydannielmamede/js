// Atividade 38 — Encontrando erros em objetos
// Analise o código:
let jogo = {
 nome: "Hollow Knight",
 genero: "Aventura",
 ano: 2017
};
// console.log(jogo.titulo);
jogo.genero = "Ação e aventura";
// jogo.anoLancamento = 2020;
jogo.ano = 2020
console.log(jogo);
// O código é executado, mas há um problema na primeira consulta e uma possível inconsistência 
// nas informações.
// a) Por que jogo.titulo apresenta undefined? ==> a propriedade titulo nao existe, entao está sendo criada e imprimida sem valor.
// b) Como acessar corretamente o nome do jogo? ==> jogo.nome
// c) A atribuição a jogo.anoLancamento provoca um erro? Explique. ==> Não, está apenas criando uma nova propriedade e atribuindo um valor.
// d) Corrija o ano de lançamento considerando as informações fornecidas no objeto original. ==> 
// e) Apresente o objeto corrigido.