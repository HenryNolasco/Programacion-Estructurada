// 1. Crear el objeto producto
const producto = {
    // Detalles
    detalles: {
        nombre: "Smartphone",
        precio: 599.99,
        categoria: "Tecnología"
    },
    // Inventario
    inventario: {
        stock: 100,
        proveedor: "TechCorp",
        ubicacion: "Almacén A"
    },
    // Historial
    historial: {
        fechaIngreso: "2024-01-15",
        ultimaVenta: "2024-03-20",
        ventasTotales: 45
    }
};

// 2. Mostrar únicamente los detalles
console.log("=== DETALLES DEL PRODUCTO ===");
console.log("Nombre:", producto.detalles.nombre);
console.log("Precio:", producto.detalles.precio);
console.log("Categoría:", producto.detalles.categoria);

// 3. Aumentar el stock en 50 unidades
producto.inventario.stock += 50;

// 4. Cambiar la categoría a "Electrónica"
producto.detalles.categoria = "Electrónica";

// 5. Extraer el nombre y precio en variables separadas
const nombreProducto = producto.detalles.nombre;
const precioProducto = producto.detalles.precio;

console.log("\n=== VARIABLES EXTRAÍDAS ===");
console.log("Nombre:", nombreProducto);
console.log("Precio:", precioProducto);

// 6. Mostrar el objeto actualizado
console.log("\n=== OBJETO ACTUALIZADO ===");
console.log(producto);