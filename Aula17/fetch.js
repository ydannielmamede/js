const fetchAPI = async () => {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random")
        if (!response.ok) {
            throw new Error("Erro HTPP: " + response.status);
            
            
        }
        const data = await response.json()

        console.log(data.quote);
        console.log(data.author);
        
        
        
    } catch (error) {
        console.log("Erro: ", error.message);
    }
    
    
}

fetchAPI()