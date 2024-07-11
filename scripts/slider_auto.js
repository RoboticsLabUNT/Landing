// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos todos los inputs de tipo radio dentro del carrusel
    const slides = document.querySelectorAll('.slider input[type="radio"]');
    let currentIndex = 0; // Índice inicial del slide actual

    // Función para avanzar al siguiente slide
    function nextSlide() {
        // Desmarca el input actual
        slides[currentIndex].checked = false;
        // Avanza al siguiente slide
        currentIndex = (currentIndex + 1) % slides.length;
        // Marca el siguiente input como checked
        slides[currentIndex].checked = true;
    }

    // Función para iniciar el carrusel automático
    function startCarousel() {
        setInterval(nextSlide, 6000); // Cambia cada 2 segundos (2000 milisegundos)
    }

    // Inicia el carrusel automático cuando se carga completamente el DOM
    startCarousel();
});
