const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productoraController');

router.get('/', ctrl.listarProductoras);
router.get('/:id', ctrl.obtenerProductora);
router.post('/', ctrl.crearProductora);
router.put('/:id', ctrl.actualizarProductora);
router.delete('/:id', ctrl.eliminarProductora);

module.exports = router;