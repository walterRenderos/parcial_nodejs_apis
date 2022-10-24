
const { Schema, model } = require('mongoose');
// codigo nombre paisquejecuta fechacierre
const GuatemalaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'Codigo es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
        unique: true
    },
    pais: {
        type: String,
        required: [true, 'El pais es obligatorio'],
    },
    fecha:{
        type: Date,
        require: [true, 'La fecha de cierre es oblihatoria']
    },
    estado: {
        type: Boolean,
        default: true
    },
});



GuatemalaSchema.methods.toJSON = function() {
    const { __v, ...Guatemala  } = this.toObject();
    return Guatemala;
}

module.exports = model( 'Guatemala', GuatemalaSchema );
