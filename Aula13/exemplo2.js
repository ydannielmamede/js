let idade = -1

try {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa!")
    }
    if (idade < 18) {
        throw new Error("Acesso permitido somente para maiores de idade!")
    }
    console.log("Acesso autorizado!");
    
}catch (erro) {
    console.log("Não foi possível continuar");
    console.log("Motivo: "+ erro.message);
}