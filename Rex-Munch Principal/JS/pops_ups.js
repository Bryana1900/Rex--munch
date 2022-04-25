'use strict';
const abrir = document.querySelector('#abrir_popup_registrate');

const val = () => {
    Swal.fire({
        title: 'Registrate a Rex-Munch',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonColor: "#dc7f05fa",
        confirmButtonColor: "#f04d2f",
        confirmButtonText: '<i id="iconos" class="far fa-user cliente"></i>' + '<h1 class="Titulos">CLIENTE</h1>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i id="iconos" class="fas fa-utensils tenedor"></i>' + '<h1 class="Titulos">DUEÑO</h1>',
        cancelButtonAriaLabel: 'Thumbs down',
        footer: '<p class="arriba">Ya tienes una cuenta?</p>' + '<a href="//sweetalert2.github.io">Inicia Sesion</a>',
        customClass: {
            confirmButton: 'botones',
            cancelButton: 'botones',
        }

    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'Registro.html'
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            window.location.href = 'Registro.html'
        }
    });

};
abrir.addEventListener('click', val);