// Scrooling lento
$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();


            const hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
 
                window.location.hash = hash;
            });
        }
    });
});


// Modificaciones para el carrusel
const myCarouselElement = document.querySelector('#carouselViajes');
const carousel = new bootstrap.Carousel(myCarouselElement, {

    interval: 5000,

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
