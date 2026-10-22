// Atividade 7 — Complete a classificação
// Uma plataforma de jogos precisa classificar a idade de seus usuários para uma atividade 
// fictícia.
// Complete o código para apresentar uma das seguintes classificações:
// • Menor de 13 anos: "Categoria infantil".
// • De 13 a 17 anos: "Categoria juvenil".
// • 18 anos ou mais: "Categoria adulta".
// • Idade negativa: "Idade inválida".
const idade = 25;
if (idade < 0) {
 console.log("Idade inválida");
} else if (idade < 13 ) {
 console.log("Categoria infantil");
} else if (idade >= 13 && idade <=17) {
 console.log("Categoria juvenil");
} else {
 console.log("Categoria adulta");
}
// Teste com as idades -1, 10, 16 e 25.