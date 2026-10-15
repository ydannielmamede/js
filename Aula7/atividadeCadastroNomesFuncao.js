const { question } = require("readline-sync");
console.clear();
const nomes = ["Daniel", "Hugo", "Gabriel", "Cleiton", "Alberto"]

//1. Exibir todos os nomes cadastrados, junto com suas posições no array.
const exibirNomesCadastrados = (lista) =>{
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

//2. Solicitar ao usuário para adicionar à lista
const adicionarNomeLista = () => {
    let adicionarNome = question("Adiciona um nome na lista: ")
    nomes.push(adicionarNome)
}


//Exibição: 
exibirNomesCadastrados(nomes)

//2. Solicitar ao usuário para adicionar à lista
adicionarNomeLista()

//3. Adicionar o nome utilizando push()

//4. Percorrer a lista com for e exibir todos os nomes novamente


for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}, na posicao: ${i+1}`);
}
console.log(nomes);

//5. Contar quantos nomes possuem mais de 5 caracteres.

let contadorCincoCaracteres = 0;

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].length > 5) {
        contadorCincoCaracteres++
    }
}

console.log(`${contadorCincoCaracteres} nomes com mais de 5 caracteres.`);

//6. Exibir a quantidade de nomes cadastrados ao final
console.log(`Quandotidade de nomes: ${nomes.length}`);