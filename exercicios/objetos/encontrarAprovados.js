const calcularMedia = lista => {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i].nota;
  }
  return soma / lista.length
}

const listaAprovados = lista => {
  const aprovados = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nota >= 7) {
      aprovados.push(lista[i].nome);
    }
  }
  return aprovados
}

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Julia", nota: 9 },
  { nome: "Pedro", nota: 7 }
];

const media = calcularMedia(alunos)
const aprovados = listaAprovados(alunos)

console.log(media)
console.log(aprovados)
