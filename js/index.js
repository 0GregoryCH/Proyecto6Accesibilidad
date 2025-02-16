// Interacción accesible
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

// Carrusel
const carruselSlides = document.querySelector('.carrusel-slides');
const carruselAnterior = document.querySelector('.carrusel-anterior');
const carruselSiguiente = document.querySelector('.carrusel-siguiente');
const carruselPausa = document.querySelector('.carrusel-pausa');
let intervaloCarrusel;
let indiceSlide = 0;

function moverCarrusel(direccion) {
    const totalSlides = document.querySelectorAll('.carrusel-slide').length;
    indiceSlide = (indiceSlide + direccion + totalSlides) % totalSlides;
    carruselSlides.style.transform = `translateX(-${indiceSlide * 100}%)`;
}

function iniciarCarrusel() {
    intervaloCarrusel = setInterval(() => moverCarrusel(1), 5000);
}

function pausarCarrusel() {
    clearInterval(intervaloCarrusel);
}

carruselAnterior.addEventListener('click', () => {
    pausarCarrusel();
    moverCarrusel(-1);
});

carruselSiguiente.addEventListener('click', () => {
    pausarCarrusel();
    moverCarrusel(1);
});

carruselPausa.addEventListener('click', () => {
    if (intervaloCarrusel) {
        pausarCarrusel();
        intervaloCarrusel = null;
        carruselPausa.textContent = 'Reanudar';
    } else {
        iniciarCarrusel();
        carruselPausa.textContent = 'Pausar';
    }
});

// Iniciar carrusel automáticamente
iniciarCarrusel();

// Navegación por teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.activeElement.click();
    }
});
