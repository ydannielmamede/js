// Atividade 49 — O array com posições incorretas
let animais = ["Gato", "Cachorro", "Coelho", "Papagaio"];
for (let i = 0; i < animais.length; i++) {
 console.log(`${i + 1} - ${animais[i]}`);
}
// Enunciado: o programa deveria listar todos os animais, mas também apresenta um resultado
// indesejado.
// Corrija o percurso do array e explique por que o último índice válido é diferente do tamanho
// do array. => A repeticao está maior que a quantidade de elementos do array, por isso sempre dará undefined, para isso basta corrigir o <=animals.length para <animals.length 
