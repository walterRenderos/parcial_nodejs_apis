const { response, request } = require('express');


const CostaRica = require('../models/costarica');



const costaricaGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, costarica ] = await Promise.all([
        CostaRica.countDocuments(query),
        CostaRica.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        "titulo": "Proyectos de Costa Rica",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        total,
        proyectos: costarica
    });
}

const costaricaPost = async(req, res = response) => {
    
    const { codigo, nombre, monto } = req.body;
    const costarica = new CostaRica({ codigo, nombre, monto});

    // Guardar en BD
    await costarica.save();

    res.json({
        "titulo": "Proyecto guardado con exito",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        costarica
    });
}

const costaricaPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, codigo, ...resto } = req.body;

    const costarica = await CostaRica.findByIdAndUpdate( id, resto );

    res.json({
        "titulo": "Proyectos de Costa Rica",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        costarica
    });
}

const costaricaPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - costaricaPatch'
    });
}

const costaricaDelete = async(req, res = response) => {

    const { id } = req.params;
    
    const costarica = await CostaRica.findByIdAndUpdate( id, { estado: false } );

    res.json(costarica);
}




module.exports = {
    costaricaGet,
    costaricaPost,
    costaricaPut,
    costaricaPatch,
    costaricaDelete,
}