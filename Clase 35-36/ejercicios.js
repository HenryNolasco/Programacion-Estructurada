

console.log("EJERCICIOS CON FOR ");

// Ejercicio 1: Tabla de multiplicar del 5
console.log("\n1. TABLA DE MULTIPLICAR DEL 5");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Ejercicio 2: Números impares
console.log("\n2. NÚMEROS IMPARES ENTRE 1 Y 50");
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

// Ejercicio 3: Secuencia de 10 en 10
console.log("\n3. SECUENCIA DEL 10 AL 100");
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

// Ejercicio 4: Mostrar nombres predefinidos
console.log("\n4. MOSTRAR NOMBRES");
let nombres = ["Ana", "Carlos", "María"];
for (let i = 0; i < nombres.length; i++) {
    console.log(`${i + 1}. ${nombres[i]}`);
}

console.log("\n EJERCICIOS COMPLETADOS ");