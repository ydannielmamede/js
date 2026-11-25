// Etapa 3 — Desafio de investigação 

// Antes de executar o código, observe: 

console.log("1 - Programa iniciado"); 

 

const buscarDados = async () => { 

    console.log("2 - Consultando API"); 

    const response = await fetch("https://dummyjson.com/users/1"); 

    const usuario = await response.json(); 

    console.log("4 - Usuário:", usuario.firstName); 

}; 

 

buscarDados(); 

console.log("3 - Continuando o programa"); 

 

// Responda: 

// Qual será a ordem das mensagens exibidas no console? 

// Por que a mensagem 3 aparece antes da mensagem 4? 

// Qual é a finalidade do await? 

// Qual a diferença entre utilizar .then() e async/await? 

// O que aconteceria se retirássemos o await de response.json()? 