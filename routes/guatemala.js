
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esPaisValido, existeNombre, existeIdGuatemala } = require('../helpers/db-validators');

const { guatemalaGet,
        guatemalaPost,
        guatemalaPut,
        guatemalaPatch,
        guatemalaDelete
    } = require('../controllers/guatemala');

const router = Router();


router.get('/', guatemalaGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('pais').custom( esPaisValido ),
    check('nombre').custom( existeNombre ),
    validarCampos
], guatemalaPut );

router.post('/',[
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha', 'digite una fecha valida').isDate(),
    check('pais').custom( esPaisValido ),
    validarCampos
], guatemalaPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeIdGuatemala ),
    validarCampos
],guatemalaDelete );

router.patch('/', guatemalaPatch );


module.exports = router;