const { Schema, model } = require('mongoose');

const PaisesSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    }
});

module.exports = model( 'Paises', PaisesSchema );
