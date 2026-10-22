// Atividade 16 — Repetição com validação
// Complete o programa para solicitar uma senha até que o usuário digite a senha correta.
const readline = require("readline-sync");
const senhaCorreta = "js2026";
let senhaDigitada = "";
while (true) {
    senhaDigitada = readline.question("Digite a senha: ");
    if (senhaDigitada !== senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.");
        continue
    }
    break
}
console.log("Acesso autorizado!");
// Teste com uma senha errada, duas senhas erradas e, por fim, a senha correta.
// Atenção: este é um exercício didático de controle de fluxo, não uma implementação de
// autenticação segura.