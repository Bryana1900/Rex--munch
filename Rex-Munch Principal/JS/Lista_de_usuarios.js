'use strict';
const inputUsuario = document.querySelector('#txt-usuario');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIngresar = document.querySelector('#btn_submit');
let coleccionDatos = [];

const inicializarColeccion = async() => {
    coleccionDatos = await obtenerDatos('http://localhost:3000/api/obtener-datos');
    valida();

};

const valida = () => {

    let autenticado = false;
    let msjError = 'Usuario o contraseña incorrecta';

    coleccionDatos.forEach(datos => {
        if (datos.correo == inputUsuario.value) {
            if ((datos.contrasenna == inputContrasenna.value)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(datos));
                autenticado = true;

            }
        }
    });
    if (autenticado == true) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión correcto'
        }).then(() => {
            window.location.href = 'Pagina_Principal.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No se pudo iniciar la sesión',
            text: msjError
        });
    }

};

//inicializarColeccion();
btnIngresar.addEventListener('click', inicializarColeccion);