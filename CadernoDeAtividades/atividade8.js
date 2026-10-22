// O código deveria permitir a entrada de uma pessoa em uma área de recreação somente 
// quando ela tiver pelo menos 12 anos e estiver acompanhada por um responsável.
const idade = 12;
const acompanhado = false;
if (idade >= 12 && acompanhado === true) {
 console.log("Entrada permitida");
} else {
 console.log("Entrada não permitida");
}
// Tarefas:
// a) Identifique o erro lógico.
// b) Explique por que uma pessoa com 10 anos e sem acompanhante poderia receber uma 
// mensagem incorreta se a condição fosse interpretada de maneira inadequada.
// c) Corrija a condição para que as duas exigências sejam atendidas simultaneamente.
// d) Teste as quatro combinações possíveis de idade suficiente ou insuficiente e presença ou 
// ausência de responsável