// Modificaciones para el carrusel
const myCarouselElement = document.querySelector('#carouselViajes');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    // Intervalo en milisegundos
    interval: 5000,
    // Pausar el slide si el mouse está encima
    pause: 'hover'
});



// Ventana alerta al presionar boton "Enviar"

document.getElementById('boton1').addEventListener('click', function () {
    alert('El correo fue enviado exitosamente');
});

// Cambia color Titulos al hacer click

$("h1").click(function () {
    $(this).css({
        "color": "brown"
    });
});
