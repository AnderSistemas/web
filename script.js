const productos = [
    { id: 1, nombre: 'Producto1', precio: 10 },
    { id: 2, nombre: 'Producto2', precio: 15 },
    { id: 3, nombre: 'Producto3', precio: 20 }
];
//renderiza los productos en la pagina
function renderizarProductos() {
    const productosContainer = document.getElementById('productos');
    productosContainer.innerHTML = '';
    productos.forEach(producto => {
        const productoHTML = `
    <div class="col-md-4 mb-4">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio: ${producto.precio}</p>
    <button class="btn btn-primary" onclick="agregarAlCarrito('${producto.id}')">Agregar al carrito</button>
    </div>
    </div>
    </div> 
    `;
        productosContainer.innerHTML += productoHTML;
    });
}
//funcion para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === parseInt(idProducto));
    const carrito = document.getElementById('carrito');
    const carritoHTML = `
    <li class="list-group-item">${producto.nombre} -  $${producto.precio}</li>
    `;
    carrito.innerHTML += carritoHTML;
}

function pagar() {
    const carrito = document.getElementById('carrito');
    if (carrito.children.length === 0) {
        alert('El carrito esta vacio, No hay nada que pagar');
    } else {
        alert('Pago realizado con exito, Gracias por su compra');
        carrito.innerHTML = '';
    }

}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
});