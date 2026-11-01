const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/directorController');

router.get('/', ctrl.listarDirectores);
router.get('/:id', ctrl.obtenerDirector);
router.post('/', ctrl.crearDirector);
router.put('/:id', ctrl.actualizarDirector);
router.delete('/:id', ctrl.eliminarDirector);

module.exports = router;