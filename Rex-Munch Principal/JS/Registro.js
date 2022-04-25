'use strict';

const camposRequeridos = document.querySelectorAll('#frm-registrar :required');
const btnRegistrar = document.querySelector('#btn-submit');

const inputNombre = document.querySelector('#txt-nombre');
const inputCorreo = document.querySelector('#txt-email');
const inputdate = document.querySelector('#txt-fecha');
const inputcontrasenna = document.querySelector('#txt-contrasenna');

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
            nombre: inputNombre.value,
            correo: inputCorreo.value,
            date: inputdate.value,
            contrasenna: inputcontrasenna.value
        };
        registrarDatos('http://localhost:3000/api/registrar-datos', data, 'inicio_sesion.html');
    }

};

btnRegistrar.addEventListener('click', validar);