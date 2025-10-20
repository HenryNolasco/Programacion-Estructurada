// 1. Crear el objeto libro
const libro = {
    // Información
    informacion: {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico"
    },
    // Disponibilidad
    disponibilidad: {
        copias: 10,
        prestados: 3,
        ubicacion: "Estantería Ficción"
    },
    // Registro
    registro: {
        fechaPublicacion: "1967-05-30",
        fechaIngreso: "2023-08-10",
        ultimaRevision: "2023-12-15"
    }
};

// 2. Mostrar la información del autor
console.log("=== INFORMACIÓN DEL AUTOR ===");
console.log("Autor:", libro.informacion.autor);

// 3. Calcular cuántos ejemplares disponibles quedan
const disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("\n=== EJEMPLARES DISPONIBLES ===");
console.log("Ejemplares disponibles:", disponibles);

// 4. Actualizar la ultimaRevision con la fecha actual
const fechaActual = new Date().toISOString().split('T')[0];
libro.registro.ultimaRevision = fechaActual;

// 5. Cambiar el género del libro
libro.informacion.genero = "Novela latinoamericana";

// 6. Extraer titulo y ubicacion en variables
const tituloLibro = libro.informacion.titulo;
const ubicacionLibro = libro.disponibilidad.ubicacion;

console.log("\n=== VARIABLES EXTRAÍDAS ===");
console.log("Título:", tituloLibro);
console.log("Ubicación:", ubicacionLibro);

// 7. Mostrar el objeto actualizado
console.log("\n=== OBJETO ACTUALIZADO ===");
console.log(libro);