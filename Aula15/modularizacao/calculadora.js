//CommonJS
// exports.somar = function(a,b) {
//     return a + b;
// }
// exports.subtrair =  function(a,b) {
//     return a - b;
// }
// exports.multiplicar  = function(a,b) {
//     return a * b;
// }
// exports.dividir = function(a,b) {
//     if(b === 0) {
//         return "Não é possível dividir por zero!";
//     }
//     return (a / b).toFixed(2);
// }

//ESM
export function somar(a,b) {
    return a + b;
}
export function subtrair(a,b) {
    return a - b;
}
export function multiplicar(a,b) {
    return a * b;
}
export function dividir(a,b) {
    if(b === 0) {
        return "Não é possível dividir por zero!";
    }
    return (a / b).toFixed(2);
}