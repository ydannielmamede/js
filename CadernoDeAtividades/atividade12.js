// Atividade 12 — Diagnóstico de um computador
// Uma ferramenta de suporte precisa apresentar uma recomendação a partir de três
// informações:
// • O computador está ligado?
// • A conexão de rede está funcionando?
// • O usuário consegue acessar o sistema?
// Crie uma sequência de condições que produza recomendações diferentes, como verificar a
// alimentação elétrica, verificar a rede, reiniciar o aplicativo ou encaminhar o problema para
// suporte técnico.
// Você deverá utilizar operadores lógicos e, no mínimo, quatro caminhos possíveis de decisão.
// Não existe uma única solução: o importante é que as condições sejam coerentes e que todos
// os cenários previstos sejam tratados.

let computadorLigado = true;
let redeFuncionando = true;
let acessarSistema = false;

if (computadorLigado === false) {
 console.log("Verifique a alimentação elétrica");
} else if (redeFuncionando === false) {
 console.log("Verifique a rede");
} else if (acessarSistema === false) {
 console.log("Reinicie o aplicativo");
} else {
 console.log("Computador funcionando normalmente");
}
