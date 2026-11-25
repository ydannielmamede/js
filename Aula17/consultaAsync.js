const buscarUsuario = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users/1")
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json()
        console.log(data);
        

        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        
    }
}

buscarUsuario()