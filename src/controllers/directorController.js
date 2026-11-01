const { Director } = require('../models');

const listarDirectores = async (req, res) => {
    try {
        const { estado } = req.query;
        const where = estado ? { estado } : {};
        const directores = await Director.findAll({ where });
        res.json(directores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerDirector = async (req, res) => {
    try {
        const director = await Director.findByPk(req.params.id);
        if (!director) return res.status(404).json({ error: 'Director no encontrado' });
        res.json(director);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearDirector = async (req, res) => {
    try {
        const { nombres, estado } = req.body;
        const nuevo = await Director.create({ nombres, estado });
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const actualizarDirector = async (req, res) => {
    try {
        const director = await Director.findByPk(req.params.id);
        if (!director) return res.status(404).json({ error: 'Director no encontrado' });
        await director.update({ ...req.body, fecha_actualizacion: new Date() });
        res.json(director);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarDirector = async (req, res) => {
    try {
        const director = await Director.findByPk(req.params.id);
        if (!director) return res.status(404).json({ error: 'Director no encontrado' });
        await director.destroy();
        res.json({ mensaje: 'Director eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarDirectores, obtenerDirector, crearDirector, actualizarDirector, eliminarDirector };