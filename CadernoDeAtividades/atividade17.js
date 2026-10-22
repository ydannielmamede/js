// Atividade 17 — Diferenças entre for, while e do...while
// Considere a necessidade de apresentar os números de 1 a 5.
// a) Resolva o problema utilizando for.
// b) Reescreva utilizando while.
// c) Reescreva utilizando do...while.
// d) Explique em qual situação cada estrutura pode ser mais conveniente.
// e) No do...while, o que acontece quando a condição é falsa já na primeira verificação?

for (let i = 1; i <= 5; i++) {
    console.log(i+"for");
}


let i = 1;
while (i <= 5) {
    console.log(i+"while");
    i++
}

i = 1
do {
    console.log(i+"do");
    i++
    
    
} while (i <= 5);