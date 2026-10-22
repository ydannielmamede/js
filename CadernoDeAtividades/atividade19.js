// Crie um programa que apresente o seguinte padrão utilizando repetições:
// *
// **
// ***
// ****
// *****
// Depois, modifique o código para apresentar o padrão invertido:
// *****
// ****
// ***
// **
// *
// Por fim, crie um terceiro padrão em que cada linha contenha o número da própria linha 
// repetido essa quantidade de vezes.
// Exemplo:
// 1
// 22
// 333
// 4444


for (let i = 0; i < 5; i++) {
    if (i === 0 ) {
        console.log("*");
    }
    if (i === 1 ) {
        console.log("**");
    }
    
    if (i === 2 ) {
        console.log("***");
    }
    if (i === 3 ) {
        console.log("****");
    }
    if (i === 4 ) {
        console.log("*****");
    }
}


for (let i = 5; i >= 0; i--) {
    if (i === 0 ) {
        console.log("*");
    }
    if (i === 1 ) {
        console.log("**");
    }
    
    if (i === 2 ) {
        console.log("***");
    }
    if (i === 3 ) {
        console.log("****");
    }
    if (i === 4 ) {
        console.log("*****");
    }
}

for (let i = 0; i <= 5; i++) {
    if (i === 1 ) {
        console.log(i);
    }
    
    if (i === 2 ) {
        console.log(`${i}${i}`);
    }
    if (i === 3 ) {
        console.log(`${i}${i}${i}`);
    }
    if (i === 4 ) {
        console.log(`${i}${i}${i}${i}`);
    }
    if (i === 5 ) {
        console.log(`${i}${i}${i}${i}${i}`);
    }
}