const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/generoController');

router.get('/', ctrl.listarGeneros);
router.get('/:id', ctrl.obtenerGenero);
router.post('/', ctrl.crearGenero);
router.put('/:id', ctrl.actualizarGenero);
router.delete('/:id', ctrl.eliminarGenero);

module.exports = router;