// EJERCICIO 1: Calcular el cuadrado de un número
const calcularCuadrado = (numero) => numero * numero;

// EJERCICIO 2: Calcular el promedio de 3 números
const calcularPromedio = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// EJERCICIO 3: Calcular el área de un triángulo
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

// DEMOSTRACIÓN DE TODAS LAS FUNCIONES
console.log("=== DEMOSTRACIÓN DE FUNCIONES FLECHA ===");

// Ejercicio 1
console.log("\n1. CALCULAR EL CUADRADO DE UN NÚMERO");
console.log(`calcularCuadrado(4) = ${calcularCuadrado(4)}`);
console.log(`calcularCuadrado(7) = ${calcularCuadrado(7)}`);
console.log(`calcularCuadrado(11) = ${calcularCuadrado(11)}`);

// Ejercicio 2
console.log("\n2. CALCULAR EL PROMEDIO DE 3 NÚMEROS");
console.log(`calcularPromedio(15, 25, 35) = ${calcularPromedio(15, 25, 35)}`);
console.log(`calcularPromedio(8, 12, 16) = ${calcularPromedio(8, 12, 16)}`);
console.log(`calcularPromedio(20, 30, 40) = ${calcularPromedio(20, 30, 40)}`);

// Ejercicio 3
console.log("\n3. CALCULAR EL ÁREA DE UN TRIÁNGULO");
console.log(`calcularAreaTriangulo(10, 8) = ${calcularAreaTriangulo(10, 8)}`);
console.log(`calcularAreaTriangulo(6, 4) = ${calcularAreaTriangulo(6, 4)}`);
console.log(`calcularAreaTriangulo(15, 10) = ${calcularAreaTriangulo(15, 10)}`);