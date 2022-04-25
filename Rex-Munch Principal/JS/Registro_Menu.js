'use strict';

const camposRequeridos = document.querySelectorAll('#frm-registrar :required');
const btnRegistrar = document.querySelector('#btn-registrar');
const inputCategoria = document.querySelector('#A');
const inputnombre_comercial = document.querySelector('#C');
const inputnombrePlatillo = document.querySelector('#nombre-platillo');
const inputPrecio = document.querySelector('#precio');
const inputImpuesto = document.querySelector('#impuesto');
const inputDescripcion = document.querySelector('#Descripcion');
const inputCaracteristicas = document.querySelector('#caracteristica');


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
            categoria: inputCategoria.value,
            nombre_comercial: inputnombre_comercial.value,
            nombrePlatillo: inputnombrePlatillo.value,
            Precio: inputPrecio.value,
            Impuesto: inputImpuesto.value,
            descripcion: inputDescripcion.value,
            caracteristica: inputCaracteristicas.value,
        };
        registrarDatos('http://localhost:3000/api/registrar-menu', data, 'perfil.html');
    }

};

btnRegistrar.addEventListener('click', validar);