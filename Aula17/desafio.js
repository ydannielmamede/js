const carregarUsuarios = async () => {
    try {
        console.clear()
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json()
        
        data.forEach(user => {
            console.table({
                id: user.id,
                name: user.name,
                email: user.email
            })
            
        });

    } catch (error) {
        console.log("Falha na consulta: " + error.message);
    }

}

carregarUsuarios()