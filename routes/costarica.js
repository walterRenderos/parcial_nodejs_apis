
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existeNombreEnCostaRica, existeIdCostaRica} = require('../helpers/db-validators');

const { costaricaGet,
        costaricaPost,
        costaricaPut,
        costaricaPatch,
        costaricaDelete
    } = require('../controllers/costarica');

const router = Router();


router.get('/', costaricaGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('nombre').custom( existeNombreEnCostaRica ),
    validarCampos
], costaricaPut );

router.post('/',[
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('monto', 'El monto no es válido').isNumeric(),
    check('nombre').custom( existeNombreEnCostaRica ),
    validarCampos
], costaricaPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeIdCostaRica ),
    validarCampos
],costaricaDelete );

router.patch('/', costaricaPatch );


module.exports = router;