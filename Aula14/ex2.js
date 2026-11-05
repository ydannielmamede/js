const dadosJSON = '{"nome": "Mariana", "idade": 21, "curso" : "Desenvolvimento de sistemas"}';

console.log(typeof dadosJSON);

const aluno = JSON.parse(dadosJSON)
console.log(aluno);
console.log(typeof aluno);

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

