


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
