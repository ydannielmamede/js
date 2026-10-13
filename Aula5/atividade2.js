const produtos = ["Teclado", "Mouse", "Monitor", "Notebook", "Impressora"]

//1
for (let i = 0; i < produtos.length; i++) {
    console.log(`nome: ${produtos[i]} indice ${i}`);
}
console.log();


//2
for (let i = 2; i < produtos.length; i++) {
    console.log(produtos[i]);
}

console.log();
//3
for (let i = 0; i < produtos.length; i++) {
    
    console.log(produtos[i])

    if (produtos[i] === "Notebook") {
        console.log("Mensagem Especial!!");
        break;
    }
}

console.log();
//4
produtos.splice(1,1,"Mouse sem fio")
console.log("Lista atualizada:");
console.log(produtos);


console.log();

//5
produtos.push("Webcam")
console.log("Lista atualizada:");
console.log(produtos);