'use strict';
///const inputUsuario = document.querySelector('#txt-ejercicio');
//const inputContrasenna = document.querySelector('#txt-contrasenna');
//const btnIngresar = document.querySelector('#btn-registrar');

const validar = () => {
    let error = false;
    console.log('hola');
    let inputsRequeridos = document.querySelectorAll('input:required');

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            console.log('Se cerró');
        });
    }
};



//btnIngresar.addEventListener('click', validar);