'Use strict';
const open = document.querySelector('#terminar');

const confirmacion = () => {
    Swal.fire({
        html: '<img id="hola" src="/IMG/Logo_Rexmunch.png" alt="">' +
            '<h1 id="titulo2">Reservar</h1>' +
            '<p class="p">Para crear una reserva siga los siguientes pasos(los campos con asterisco son opcionales)</p>' +
            '<input id=""  type="tex" class="input-1" placeholder="Nombre de la reserva" required>' +
            ' <p class="fecha">Fecha<span class="hora">Hora</span></p>' +
            '<input type="date" id="modificar" class="input-2" required>' +
            '<input type="time" id="modificar2" class="input-2" required>' +
            '<p class="espacios-disponibles">Espacios disponibles</p>' +
            '<input type="number" id="modificar3" class="input-general" required>' +
            '<button class="reserva-botones">*ESCOGER MENU</button>' +
            '<button class="reserva-botones">METODO DE PAGO</button>',
        showCloseButton: true,
        confirmButtonColor: "#5F1348",
        confirmButtonText: '<h2 id="si-no">TERMINAR RESERVA</h2>',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        customClass: {
            popup: 'border',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: '<img id="hola" src="/IMG/Logo_Rexmunch.png" alt="">' +
                    '<h1 id="titulo">Confirmacion de pago</h1>',
                showCloseButton: true,
                showCancelButton: true,
                cancelButtonColor: "#f04d2f",
                confirmButtonColor: "#f04d2f",
                confirmButtonText: '<h1 id="si-no">SI</h1>',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<h1 id="si-no">NO</h1>',
                cancelButtonAriaLabel: 'Thumbs down',
                customClass: {
                    confirmButton: 'botones',
                    cancelButton: 'botones',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'Factura.html'
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    window.location.href = 'menu.html'

                };
            });
        }
    });

};
open.addEventListener('click', confirmacion);