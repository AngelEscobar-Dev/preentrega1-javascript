// Simulador de compra

const nombre = prompt("Ingrese su nombre");

const producto = prompt("Ingrese el producto que desea comprar");

const precio = parseFloat(prompt("Ingrese el precio del producto"));

const cantidad = parseInt(prompt("Ingrese la cantidad de productos"));

const total = precio * cantidad;

let mensaje = "Hola " + nombre;
mensaje = mensaje + ", elegiste comprar " + cantidad + " unidades de " + producto;
mensaje = mensaje + ". El total de la compra es $" + total;

alert(mensaje);

console.log("Nombre: " + nombre);
console.log("Producto: " + producto);
console.log("Precio: $" + precio);
console.log("Cantidad: " + cantidad);
console.log("Total: $" + total);
