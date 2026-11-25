// Etapa 1 — Consultando com .then() 

// Crie um arquivo chamado consultaThen.js. 

// O programa deverá: 

// Exibir a mensagem "Iniciando consulta...". 

// Utilizar fetch() para consultar a API. 

// Utilizar o primeiro .then() para converter a resposta em JSON. 

// Utilizar o segundo .then() para exibir o nome, a idade e o e-mail do usuário. 

// Utilizar .catch() para tratar possíveis erros. 

// Exibir a mensagem "Requisição enviada!" fora do encadeamento. 

// Código inicial para completar: 

 

console.log("Iniciando consulta..."); 

 

fetch("https://dummyjson.com/users/1") 

    .then(response => { 

        // TODO: converter a resposta em JSON 
        return response.json()

    }) 

    .then(usuario => { 

        // TODO: exibir nome, idade e email 
        console.table({
            firstName: usuario.firstName,
            age: usuario.age,
            email: usuario.email
        })

    }) 

    .catch(erro => { 

        // TODO: exibir mensagem de erro 
        console.log(`Erro: ${erro}`);
        

    }); 

 

console.log("Requisição enviada!"); 