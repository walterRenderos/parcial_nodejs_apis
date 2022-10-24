const { response, request } = require('express');


const Guatemala = require('../models/guatemala');



const guatemalaGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, guatemala ] = await Promise.all([
        Guatemala.countDocuments(query),
        Guatemala.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        "titulo": "Proyectos de Guatemala",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        total,
        guatemala
    });
}

const guatemalaPost = async(req, res = response) => {
    
    const { codigo, nombre, pais, fecha } = req.body;
    const guatemala = new Guatemala({ codigo, nombre, pais, fecha});

    // Guardar en BD
    await guatemala.save();

    res.json({
        "titulo": "Proyecto guardado con exito",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        guatemala
    });
}

const guatemalaPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, codigo, nombre, ...resto } = req.body;

    const guatemala = await Guatemala.findByIdAndUpdate( id, resto );

    res.json({
        "titulo": "Proyectos de Guatemala",
        "Autor": "Walter Alexander Renderos Suriano",
        "Carnet": "25-0358-2017",
        guatemala
    });
}

const guatemalaPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - guatemalaPatch'
    });
}

const guatemalaDelete = async(req, res = response) => {

    const { id } = req.params;
    
    const guatemala = await Guatemala.findByIdAndUpdate( id, { estado: false } );

    res.json(guatemala);
}




module.exports = {
    guatemalaGet,
    guatemalaPost,
    guatemalaPut,
    guatemalaPatch,
    guatemalaDelete,
}