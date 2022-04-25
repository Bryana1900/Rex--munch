'use strict';

const contenedor = document.querySelector('#sct-cartas .contenedor');
let listaEjercicios = [];


const inicializarListas = async() => {
    listaEjercicios = await obtenerDatos('http://localhost:3000/api/obtener-restaurantes');
    mostrarCartas();
};

const mostrarCartas = () => {

    listaEjercicios.forEach(restaurantes => {
        let carta = document.createElement('div');
        carta.classList.add('carta');

        let titulo = document.createElement('h3');
        titulo.innerText = restaurantes.nombre_comercial;

        let imagen = document.createElement('img');
        imagen.src = restaurantes.foto;

        let cuerpoCarta = document.createElement('div');
        cuerpoCarta.classList.add('cuerpo');

        let zona = document.createElement('p');
        zona.innerText = restaurantes.provincia;

        let estado = document.createElement('p');
        estado.innerText = restaurantes.canton;
        estado.classList.add('estado');



        contenedor.appendChild(carta);
        carta.appendChild(titulo);
        carta.appendChild(imagen);
        carta.appendChild(cuerpoCarta);
        cuerpoCarta.appendChild(zona);
        cuerpoCarta.appendChild(estado);

    });



};


inicializarListas();