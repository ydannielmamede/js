const { question } = require("readline-sync");

const fetchCEP = async (cep) => {
    try {
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json`)
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        
        
    }
    
}
const cep = question("Inserir cep: ")
fetchCEP(cep)