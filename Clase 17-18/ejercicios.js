

// Ejercicio 1: Array de frutas
console.log("EJERCICIO 1");
const frutas = ["Manzana", "Banana", "Naranja", "Uva", "Fresa"];
console.log("Lista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Ejercicio 2: Días de la semana
console.log("EJERCICIO 2");
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log("Primer día: " + diasSemana[0]);
console.log("Último día: " + diasSemana[diasSemana.length - 1]);

// Ejercicio 3: Array de colores
console.log("EJERCICIO 3");
const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
console.log("Array original:", colores);
colores[1] = "Negro";
console.log("Array actualizado:", colores);