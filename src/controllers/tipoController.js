const { Tipo } = require('../models');

const listarTipos = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByPk(req.params.id);
        if (!tipo) return res.status(404).json({ error: 'Tipo no encontrado' });
        res.json(tipo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearTipo = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevo = await Tipo.create({ nombre, descripcion });
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const actualizarTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByPk(req.params.id);
        if (!tipo) return res.status(404).json({ error: 'Tipo no encontrado' });
        await tipo.update({ ...req.body, fecha_actualizacion: new Date() });
        res.json(tipo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByPk(req.params.id);
        if (!tipo) return res.status(404).json({ error: 'Tipo no encontrado' });
        await tipo.destroy();
        res.json({ mensaje: 'Tipo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarTipos, obtenerTipo, crearTipo, actualizarTipo, eliminarTipo };