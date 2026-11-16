const entregas = [
    { id: 101, cliente: "Pedro", status: "Pendente", etapa: 0 },
    { id: 102, cliente: "Juliana", status: "Pendente", etapa: 0 },
    { id: 103, cliente: "Roberto", status: "Pendente", etapa: 0 }
];

function monitorarEntregas(callback) {
    setInterval(() => {

        entregas.forEach(entrega => {
            entrega.etapa++
            
            if (entrega.etapa === 1) {
                entrega.status = "Em transporte"
            }else if (entrega.etapa === 2) {
                entrega.status = "Saiu para entrega"
            }else if (entrega.etapa === 3) {
                entrega.status = "Entregue"
            }
        });

    }, 2000);
    
}