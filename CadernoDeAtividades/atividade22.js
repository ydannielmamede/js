// O código abaixo deveria apresentar todos os participantes de um evento, mas não funciona 
// corretamente.
let participantes = [
 "Ana",
 "Bruno",
 "Carla",
 "Daniel",
 "Eduarda"
];
for (let i = 0; i < participantes.length; i++) {
    console.log(`${i+1} - ${participantes[i]}`);
    
}
// a) Identifique os dois problemas na estrutura de repetição.
// b) Corrija o código.
// c) Modifique a solução para apresentar cada participante com seu número de ordem, 
// começando por 1.
// Exemplo: 1 - Ana