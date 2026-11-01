const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/tipoController');

router.get('/', ctrl.listarTipos);
router.get('/:id', ctrl.obtenerTipo);
router.post('/', ctrl.crearTipo);
router.put('/:id', ctrl.actualizarTipo);
router.delete('/:id', ctrl.eliminarTipo);

module.exports = router;