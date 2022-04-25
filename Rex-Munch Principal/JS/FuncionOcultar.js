'use strict';

const enlaceUsuarios = document.querySelector('#enlaceUsuarios');
const enlacesAdministrador = document.querySelector('#enlacesAdministrador');
const enlacesGerente = document.querySelector('#enlacesGerente');
const enlacesDuenno = document.querySelector('#enlacesDueño');
const Restaurantes = document.querySelector('#Restaurantes');
const favoritos_ocultar = document.querySelector('#favoritos_ocultar');
const populares_ocultar = document.querySelector('#populares_ocultar');
const botones = document.querySelector('#botones');
const perfildueño = document.querySelector('#dueño');


let usuarioSesion = JSON.parse(localStorage.getItem('usuarioConectado'));

if (!usuarioSesion) {
    window.location.href = 'Rex-Munch.html';

} else {
    switch (usuarioSesion.rol) {
        case 'cliente':
            enlacesAdministrador.classList.add('ocultar');
            enlacesDuenno.classList.add('ocultar');
            enlacesGerente.classList.add('ocultar');
            botones.classList.add('ocultar');
            break;

        case 'admin':
            enlaceUsuarios.classList.add('ocultar');
            enlacesDuenno.classList.add('ocultar');
            enlacesGerente.classList.add('ocultar');
            Restaurantes.classList.add('ocultar');
            favoritos_ocultar.classList.add('ocultar');
            populares_ocultar.classList.add('ocultar');

            break;

        case 'gerente':
            enlaceUsuarios.classList.add('ocultar');
            enlacesDuenno.classList.add('ocultar');
            enlacesAdministrador.classList.add('ocultar');
            Restaurantes.classList.add('ocultar');
            favoritos_ocultar.classList.add('ocultar');
            populares_ocultar.classList.add('ocultar');
            botones.classList.add('ocultar');
            break;

        case 'dueño':
            enlaceUsuarios.classList.add('ocultar');
            enlacesGerente.classList.add('ocultar');
            enlacesAdministrador.classList.add('ocultar');
            Restaurantes.classList.add('ocultar');
            favoritos_ocultar.classList.add('ocultar');
            populares_ocultar.classList.add('ocultar');
            botones.classList.add('ocultar');
            perfildueño.classList.add('ocultar');
            break;

        default:
            window.location.href = 'Rex-Munch.html';
            break;
    }
}
enlaceCerrar.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'Rex-Munch.html';
});