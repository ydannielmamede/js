import readlineSync from "readline-sync";

const { question, questionInt, questionFloat } = readlineSync;

export function perguntarTexto(mensagem) {
    try {
        const texto = question(mensagem)
        if (texto === "") {
            throw new Error("Campo vazio, tente novamente");
        }
        return texto
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
export function perguntarNumeroInt(mensagem) {
    return questionInt(mensagem)
}
    
export function perguntarNumeroFLoat(mensagem) {
    return questionFloat(mensagem)
}
