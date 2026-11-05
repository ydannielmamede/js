const aluno = {
    nome : "Carlos",
    idade: 22,
    curso: "Desenvolvimento de Sistemas",
    matriculado: true
}
const alunoJSON = JSON.stringify(aluno)
console.log(typeof alunoJSON);
