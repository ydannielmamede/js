let contador = 0;

while (true) {
    contador++;

    if (contador === 3) {
        continue;
    }

    console.log(contador);

    if (contador === 5) {
        break;
    }
}