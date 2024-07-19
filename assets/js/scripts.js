
$(document).ready(function() {
    alert('El archivo JavaScript se está cargando correctamente.');
});


document.addEventListener('DOMContentLoaded', function() {
// Inicializar tooltips
    $('[data-toggle="tooltip"]').tooltip();

   

// Manejar el envío del formulario
document.getElementById('contacto').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;
        
        // Mostrar los valores en una alerta
        alert('Nombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje);
        
        // Reiniciar el formulario
        document.getElementById('contacto').reset();
    });
});