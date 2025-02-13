// Ejemplo de interacción accesible
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto añadido al carrito');
    });
});

// Validación de formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado correctamente');
});