const precoMenor200 = lista => {
  const precoMenor200 = []

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].preco < 200) {
      precoMenor200.push(lista[i].nome)
    }
  }
  return precoMenor200
}

const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 60 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 180 },
  { nome: "Webcam", preco: 250 }
];

console.log(precoMenor200(produtos))


