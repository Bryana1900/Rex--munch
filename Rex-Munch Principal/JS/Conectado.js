'use strict'
const elementNombreUsuario = document.querySelector('#nombreUsuario');

let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

elementNombreUsuario.innerText = usuarioConectado.nombre;