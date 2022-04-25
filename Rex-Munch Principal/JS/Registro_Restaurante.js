'use strict';

const camposRequeridos = document.querySelectorAll('#frm-registrar :required');
const btnRegistrar = document.querySelector('#btn-submit');

const inputnombre = document.querySelector('#nombre');
const inputcomercial = document.querySelector('#nombre-comercial');
const cedula = document.querySelector('#cedula');
const inputProvincia = document.querySelector('#provincia');
const inputCanton = document.querySelector('#canton');
const inputDistrito = document.querySelector('#distrito');
const inputTelefono = document.querySelector('#telefono');
const inputCorreo = document.querySelector('#correo');
const inputCapacidad = document.querySelector('#capacidad');
const inputLunes = document.querySelector('#lunes');
const inputMartes = document.querySelector('#martes');
const inputMiercoles = document.querySelector('#miercoles');
const inputJueves = document.querySelector('#jueves');
const inputViernes = document.querySelector('#viernes');
const inputSabado = document.querySelector('#sabado');
const inputDomingo = document.querySelector('#domingo');
const inputgerente = document.querySelector('#txt-nombre');
const inputemail = document.querySelector('#txt-email');
const inputId = document.querySelector('#txt-identificacion');
const inputTipo = document.querySelector('#tipo');
const inputFecha = document.querySelector('#txt-fecha');

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
            title: 'No se pudo registrar el ejercicio',
            text: 'Por favor revise los campos resaltados'
        });
    } else {
        let data = {
            nombre: inputnombre.value,
            nombre_comercial: inputcomercial.value,
            cedula: cedula.value,
            provincia: inputProvincia.value,
            canton: inputCanton.value,
            distrito: inputDistrito.value,
            telefono: inputTelefono.value,
            correo: inputCorreo.value,
            capacidad: inputCapacidad.value,
            lunes: inputLunes.value,
            martes: inputMartes.value,
            miercoles: inputMiercoles.value,
            jueves: inputJueves.value,
            viernes: inputViernes.value,
            sabado: inputSabado.value,
            domingo: inputDomingo.value,
            nombreGerente: inputgerente.value,
            email: inputemail.value,
            id: inputId.value,
            tipo: inputTipo.value,
            fecha: inputFecha.value,
        };
        registrarDatos('http://localhost:3000/api/registrar-restaurantes', data, 'Registro_menu.html');
    }

};

btnRegistrar.addEventListener('click', validar);