// Selección del encabezado
const header = document.querySelector('.header');
const hideDistance = 100; // Distancia en píxeles después de la cual el encabezado se desvanece

// Función para ocultar el encabezado al hacer scroll
function handleScroll() {
    // Verifica el ancho de la ventana
    if (window.innerWidth > 950) {
        if (window.scrollY > hideDistance) {
            header.style.opacity = '0'; // Oculta el encabezado
        } else {
            header.style.opacity = '1'; // Muestra el encabezado
        }
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', handleScroll);

// Restablece el encabezado al pasar el cursor sobre él
header.addEventListener('mouseenter', function() {
    // Verifica el ancho de la ventana
    if (window.innerWidth > 950) {
        if (window.scrollY > hideDistance) {
            header.style.opacity = '1'; // Muestra el encabezado
        }
    }
});

// Vuelve a ocultar el encabezado cuando se retira el cursor de él
header.addEventListener('mouseleave', function() {
    // Verifica el ancho de la ventana
    if (window.innerWidth > 950) {
        if (window.scrollY > hideDistance) {
            header.style.opacity = '0'; // Oculta el encabezado
        }
    }
});
