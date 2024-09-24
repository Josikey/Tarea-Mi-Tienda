// Inicio  para el carrito de compras
let carrito = [];

// Función para mostrar el menú principal
function mostrarMenu() {
    // Muestra las opciones disponibles en un cuadro de diálogo y devuelve la opción seleccionada como un entero
    return parseInt(prompt(`
        "Opciones disponibles"
        1.- Agregar producto al carrito
        2.- Ver carrito y total de la compra
        3.- Salir
        "Elige una opción:"
    `));
}

// Arreglo de productos 
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 200 },
    { id: 2, nombre: 'Pantalones', precio: 500 },
    { id: 3, nombre: 'Zapatos', precio: 800 },
    { id: 4, nombre: 'Sombrero', precio: 150 },
    { id: 5, nombre: 'Gorra', precio: 300 },
    { id: 6, nombre: 'Tenis', precio: 700 },
    { id: 7, nombre: 'Lentes', precio: 150 },
    { id: 8, nombre: 'Overol', precio: 670 }
];

// Función para agregar un producto al carrito
const agregarProducto = () => {
    // Mostrar lista de productos disponibles
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} ($${producto.precio})\n`;
    });
    // Solicitar al usuario el número del producto que desea agregar al carrito
    let opcionProducto = parseInt(prompt(`${mensaje}Ingresa el número del producto que deseas agregar:`));
    // Verificar que la opción sea válida
    if (opcionProducto > 0 && opcionProducto <= productos.length) {
        // Agregar el producto al carrito
        carrito.push(productos[opcionProducto - 1]);
        alert(`Producto "${productos[opcionProducto - 1].nombre}" agregado al carrito.`);
        // Imprimir carrito y total actual en la consola
        imprimirCarritoYTotal();
    } else {
        alert("Opción no válida.");
    }
}

// Función para ver los productos en el carrito y mostrar el total
const verCarrito = () => {
    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        // Mostrar lista de productos en el carrito
        let mensaje = "Productos en tu carrito:\n";
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} ($${producto.precio})\n`;
        });

        // Calcular el total sumando los precios de los productos en el carrito
        const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
        
        // Agregar el total al mensaje
        mensaje += `\nTotal de la compra: $${total}`;

        // Mostrar el mensaje con los productos y el total
        alert(mensaje);
    }
};


// Función para imprimir el contenido del carrito y el total en la consola
const imprimirCarritoYTotal = () => {
    console.log("Contenido del carrito:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}.- ${producto.nombre} ($${producto.precio})`);
    });
    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
    console.log(`Total actual: $${total}`);
}

// Función para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        // Mostrar menú y obtener la opción seleccionada
        let opcion = mostrarMenu();
        // Estructura de control switch para manejar las opciones seleccionadas
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                verCarrito();
                break;
            case 3:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa Finalizado.");
}

// Iniciar el programa
iniciarPrograma();

