// Atividade 52 — O sistema que perde informações
let nomes = ["Ana", "Bruno", "Carla"];
let statuss = [false, true, false];
nomes.push("Daniel");

statuss.push(true);

nomes.splice(1, 1);
statuss.splice(1, 1);

console.log(nomes);
console.log(statuss);

// Enunciado: o sistema representa pessoas e seus estados por meio de arrays paralelos. Após
// uma exclusão, os dados deixam de corresponder corretamente.
// 1. Execute o código e observe os arrays.
// 2. Identifique a causa do problema.
// 3. Corrija o processo de exclusão para remover a pessoa e o estado da mesma posição.
// 4. Explique por que os dois arrays precisam ser atualizados juntos. => Os arrays deixariam de ter suas posicoes paralelas, por isso precisa atualizar as duas listas juntas
