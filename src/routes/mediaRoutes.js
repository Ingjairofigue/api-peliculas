const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mediaController');

router.get('/', ctrl.listarMedia);
router.get('/:id', ctrl.obtenerMedia);
router.post('/', ctrl.crearMedia);
router.put('/:id', ctrl.actualizarMedia);
router.delete('/:id', ctrl.eliminarMedia);

module.exports = router;