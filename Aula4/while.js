const { question } = require("readline-sync");

let usuario = question("Digite seu usuario: ")
let senha = question("Digite sua senha: ")

while (senha !== "1234" || usuario !== "daniel") {

    if (senha !== "1234") {
        console.log("Senha incorreta");
        senha = question("Digite a senha novamente: ")
    }else if (usuario !== "daniel"){
        console.log("Usuário Incorreto");
        usuario = question("Digite o usuario novamente: ")
    }
    
}