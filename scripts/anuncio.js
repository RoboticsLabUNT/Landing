document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        // Crear el contenedor de la imagen de superposición
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fondo negro semi-transparente
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.opacity = '0'; // Inicialmente invisible
        overlay.style.transition = 'opacity 0.5s ease'; // Transición para opacity

        // Crear la imagen
        const overlayImage = document.createElement('img');
        overlayImage.src = 'https://scontent.ftru1-1.fna.fbcdn.net/v/t39.30808-6/448804733_122151629468170418_7156674575496888885_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FCDaN5WwJTcQ7kNvgGfSBTx&_nc_ht=scontent.ftru1-1.fna&oh=00_AYDdh0GfiY4jINUT7sFJMiSLQtVA_EtLUw6mSdoQior0QQ&oe=6695567E'; // Cambia esto por la ruta de tu imagen
        overlayImage.style.cursor = 'pointer';
        overlayImage.style.maxWidth = '100%'; // Ajuste máximo del ancho
        overlayImage.style.maxHeight = '70vh'; // Altura del 70% de la ventana

        // Añadir el evento de clic a la imagen para abrir en una nueva ventana
        overlayImage.addEventListener('click', function () {
            window.open('https://forms.gle/U16ZKBZ7vfGkSK2q6', '_blank'); // Abrir enlace en una nueva ventana
        });

        // Crear el botón de cerrar (x)
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.fontSize = '20px';
        closeButton.style.color = '#fff';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        closeButton.style.zIndex = '10000';
        closeButton.addEventListener('click', closeOverlay);

        // Añadir la imagen y el botón de cerrar al contenedor de la superposición
        overlay.appendChild(overlayImage);
        overlay.appendChild(closeButton);

        // Añadir el contenedor de la superposición al cuerpo del documento
        document.body.appendChild(overlay);

        // Forzar el reflow antes de cambiar la opacity para que se aplique la transición
        overlay.offsetHeight;

        // Hacer visible la superposición y centrarla
        overlay.style.opacity = '1';

        // Escuchar eventos de clic en el documento para cerrar la superposición si se hace clic fuera de ella
        document.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeOverlay();
            }
        });

        // Función para cerrar la superposición
        function closeOverlay() {
            overlay.style.opacity = '0';
            setTimeout(function () {
                overlay.remove(); // Eliminar el elemento del DOM después de la transición
            }, 500); // Espera 0.5 segundos para que termine la transición
        }
    }, 2000); // 2000 milisegundos = 2 segundos, ajusta aquí el tiempo de espera antes de mostrar la superposición
});
