'Use strict';

const contenedor = document.querySelector('#sct-cartas .contenedor');
let listaUsuarios = [];


const inicializarListas = async() => {
    listaUsuarios = await obtenerDatos('http://localhost:3000/api/obtener-datos');
    mostrarListas();
};

const mostrarListas = () => {

    listaUsuarios.forEach(datos => {
        let carta = document.createElement('div');
        carta.classList.add('carta');

        let titulo = document.createElement('h3');
        titulo.innerText = datos.nombre;

        let cuerpoCarta = document.createElement('div');
        cuerpoCarta.classList.add('cuerpo');

        let zona = document.createElement('p');
        zona.innerText = datos.correo;

        let estado = document.createElement('p');
        estado.innerText = datos.rol;
        estado.classList.add('estado');

        contenedor.appendChild(carta);
        carta.appendChild(titulo);
        carta.appendChild(cuerpoCarta);
        cuerpoCarta.appendChild(zona);
        cuerpoCarta.appendChild(estado);

    });

};
inicializarListas();