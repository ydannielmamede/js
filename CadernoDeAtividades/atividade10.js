// Uma aplicação de mídia oferece as seguintes opções:
// Código Ação
// 1 Reproduzir música
// 2 Pausar reprodução
// 3 Avançar faixa
// 4 Encerrar aplicação
// Complete o programa.
const readline = require("readline-sync");
let opcao = Number(
 readline.question("Escolha uma opcao: ")
);
switch (opcao) {
 case 1:
 console.log("reproduzir música");
 break;
 case 2:
 console.log("pausar reprodução");
 break;
 case 3:
 console.log("avançar faixa");
 break;
 case 4:
 console.log("encerrar aplicação");
 break;
 default:
 console.log("opção inexistente");
}
// Preencha as lacunas, execute o código e teste todas as opções, inclusive um código 
// inexistente.