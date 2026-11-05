const funcionario = {
    nome: "Carlos",
    cargo : "Motorista",
    salario : 3000
}

const funcionarioJSON = JSON.stringify(funcionario)

const funcionarioOBJ = JSON.parse(funcionarioJSON)

console.log(funcionarioOBJ);
