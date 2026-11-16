const entregas = [
    {
        id: 1,
        cliente: "Ana",
        status: "Aguardando"
    },
    {
        id: 2,
        cliente: "Carlos",
        status: "Aguardando"
    },
    {
        id: 3,
        cliente: "Maria",
        status: "Aguardando"
    }
]


function processarEntregas(listaEntregas, callback) {
    let indice = 0

    function processarProximaEntrega() {

        if (indice < listaEntregas.listaEntregas) {

            const entrega = listaEntregas[indice]

            console.log(`Processando entrega de ${entrega.cliente}...`);

            setTimeout(() => {
                entrega.status = "Entregue"
                console.log(`Entrega de ${entrega.cliente} concluida!`);
                indice++
            }, 2000);

        } else {
            console.log("\nResumo das entregas");
            console.table(listaEntregas)
            callback()
        }
    }

    processarProximaEntrega()
}

function encerrarSistema() {
    console.log("Sistema encerrado.");
}

processarEntregas(entregas, encerrarSistema)