// Atividade 39 — Objeto e função
// Crie um objeto chamado personagem com as propriedades:
// • nome
// • vida
// • nivel
// • experiencia
// Depois, crie uma função chamada receberDano(personagem, dano) que reduza a vida do 
// personagem pelo valor recebido.
// Regras:
// • A vida não pode ficar abaixo de zero.
// • Se a vida chegar a zero, apresente a mensagem "Personagem derrotado!".
// • Caso contrário, apresente a vida restante.
// • A função deverá modificar a propriedade vida do objeto recebido.
// Teste diferentes quantidades de dano e verifique o comportamento do programa.

personagem = {
    nome: "Sonic",
    vida: 100,
    nivel: 1,
    experiencia: 2,
}

const receberDano = (personagem, dano) =>{
    if (personagem.vida - dano <= 0) {
        console.log("Personagem derrotado!");
    }else{
        personagem.vida = personagem.vida - dano
        console.log(`Vida atual: ${personagem.vida}`);
        
    }
}

receberDano(personagem, 100)