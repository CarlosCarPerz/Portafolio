const form = document.getElementById('contact-form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', function(event) {
    event.preventDefault();

  // Llama a la API de EmailJS para enviar el correo electrónico
    emailjs.send('service_5gvo7rc', 'Portafolio', {
        from_name: nombre.value,
        from_email: email.value,
        to_name: 'Carlos Carvajal',
        to_email: 'carlos.carvajal.per@gmail.com',
        subject: asunto.value,
        message: mensaje.value
    })
    .then(function(response) {
        console.log('Correo electrónico enviado con éxito', response);
    }, function(error) {
        console.error('Error al enviar el correo electrónico', error);
    });

    form.reset();
});
