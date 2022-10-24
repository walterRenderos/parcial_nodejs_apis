
const { Schema, model } = require('mongoose');


const CostaRicaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'Codigo es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
        unique: true
    },
    monto: {
        type: Number,
        required: [true, 'monto del proyecto es obligatorio'],
    },

    fecha:{
        type: Date,
        default: Date.now
    },
    estado: {
        type: Boolean,
        default: true
    },
});



CostaRicaSchema.methods.toJSON = function() {
    const { __v, ...CostaRica  } = this.toObject();
    return CostaRica;
}

module.exports = model( 'CostaRica', CostaRicaSchema );
