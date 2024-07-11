// Selección del encabezado
const header = document.querySelector('.header');

// Función para cambiar el fondo del encabezado al hacer scroll
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
}

// Escucha el evento de scroll
window.addEventListener('scroll', handleScroll);

// Restablece el fondo al pasar el cursor sobre el encabezado
header.addEventListener('mouseenter', function() {
    if (window.scrollY > 0) {
        header.classList.remove('transparent');
    }
});

// Vuelve a ocultar el fondo cuando se retira el cursor del encabezado
header.addEventListener('mouseleave', function() {
    if (window.scrollY > 0) {
        header.classList.add('transparent');
    }
});
