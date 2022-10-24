const Pais = require('../models/paises');
const Guatemala = require('../models/guatemala');
const CostaRica = require('../models/costarica');

const esPaisValido = async(pais = '') => {

    const existePais = await Pais.findOne({ nombre: pais });
    if ( !existePais ) {
        throw new Error(`El pais ${ pais } no está registrado en la BD`);
    }
}

const existeNombre = async( nombre = '' ) => {

    // Verificar si el nombre existe
    const existeNombre = await Guatemala.findOne({ nombre });
    if ( existeNombre ) {
        throw new Error(`El nombre: ${ nombre }, ya está registrado`);
    }
}

const existeNombreEnCostaRica = async( nombre = '' ) => {

    // Verificar si el nombre existe
    const existeNombreEnCostaRica = await CostaRica.findOne({ nombre });
    if ( existeNombreEnCostaRica ) {
        throw new Error(`El nombre: ${ nombre }, ya está registrado`);
    }
}

const existeIdGuatemala = async( id ) => {

    // Verificar si el correo existe
    const verificarId = await Guatemala.findById(id);
    if ( !verificarId ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeIdCostaRica = async( id ) => {

    // Verificar si el correo existe
    const verificarId = await CostaRica.findById(id);
    if ( !verificarId ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    esPaisValido,
    existeNombre,
    existeNombreEnCostaRica,
    existeIdCostaRica,
    existeIdGuatemala
}

