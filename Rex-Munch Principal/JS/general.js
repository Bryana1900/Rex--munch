'use strict';

const obtenerDatos = async(purl) => {
    let listaDatos = [];
    await axios({
            url: purl,
            method: 'get',
            responseType: 'json'
        })
        .then(response => {
            listaDatos = response.data.lista;
        })
        .catch(error => {
            console.log(error);
        });

    return listaDatos;
};

const registrarDatos = async(purl, pdata, purlRedireccion) => {
    await axios({
            url: purl,
            method: 'post',
            responseType: 'json',
            data: pdata
        })
        .then(response => {
            Swal.fire({
                icon: 'success',
                text: response.data.msj
            }).then(() => {
                window.location.href = purlRedireccion;
            });
        })
        .catch(error => {
            console.log(error);
        });
};