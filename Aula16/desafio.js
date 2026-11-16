function baixarArquivo(callback) {
    console.log("Iniciando Download");
    
    let contador = 0

    const intervalo = setInterval(() => {
        console.log(`Donwload: ${contador}%`);
        contador ++

        if (contador > 100) {
            clearInterval(intervalo)
            setTimeout(() => {
                console.log("Arquivo baixado com sucesso!");
                callback()
            }, 2000)
        }
        
    },25)
}

function abrirArquivo() {
    console.log("Abrindo arquivo...");
    
}

baixarArquivo(abrirArquivo)