import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function categorizarEdad(edad) {
    if (edad >= 0 && edad <= 11) {
        return 'Niñez';
    } else if (edad >= 12 && edad <= 17) {
        return 'Adolescencia';
    } else if (edad >= 18 && edad <= 59) {
        return 'Adultez';
    } else if (edad >= 60) {
        return 'Vejez';
    } else {
        return 'Edad no válida';
    }
}

rl.question('Ingrese su edad: ', (edadInput) => {
    let edad = Number(edadInput);
    const categoria = categorizarEdad(edad);
    console.log(`Con ${edad} años, estás en la categoría: ${categoria}`);
    rl.close();
});