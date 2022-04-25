'use strict';

const camposRequeridos = document.querySelectorAll('#frm-registrar :required');
const btnRegistrar = document.querySelector('#pago');

const inputTipo = document.querySelector('#tipo');
const inputNombre = document.querySelector('#nombre');
const inputNumero = document.querySelector('#numero');
const inputdate = document.querySelector('#fecha');
const inputcvv = document.querySelector('#cvv');

const validar = () => {
    let error = false;

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error');
        } else {
            campo.classList.remove('error');
        }
    });

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo registrar el usuario',
            text: 'Por favor revise los campos resaltados',
        });
    } else {
        let data = {
            tipoTarjeta: inputTipo.value,
            nombreTarjeta: inputNombre.value,
            numeroTarjeta: inputNumero.value,
            fechaExpiracion: inputdate.value,
            Cvv: inputcvv.value,

        };
        registrarDatos('http://localhost:3000/api/registrar-pago', data, 'Perfil.html');
    }

};

btnRegistrar.addEventListener('click', validar);