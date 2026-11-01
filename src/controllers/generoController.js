const { Genero } = require('../models');

// GET /api/generos - Listar todos (con filtro opcional por estado)
const listarGeneros = async (req, res) => {
    try {
        const { estado } = req.query;
        const where = estado ? { estado } : {};
        const generos = await Genero.findAll({ where });
        res.json(generos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET /api/generos/:id
const obtenerGenero = async (req, res) => {
    try {
        const genero = await Genero.findByPk(req.params.id);
        if (!genero) return res.status(404).json({ error: 'Género no encontrado' });
        res.json(genero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST /api/generos
const crearGenero = async (req, res) => {
    try {
        const { nombre, descripcion, estado } = req.body;
        const nuevo = await Genero.create({ nombre, descripcion, estado });
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT /api/generos/:id
const actualizarGenero = async (req, res) => {
    try {
        const genero = await Genero.findByPk(req.params.id);
        if (!genero) return res.status(404).json({ error: 'Género no encontrado' });
        
        await genero.update({
            ...req.body,
            fecha_actualizacion: new Date()
        });
        res.json(genero);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE /api/generos/:id
const eliminarGenero = async (req, res) => {
    try {
        const genero = await Genero.findByPk(req.params.id);
        if (!genero) return res.status(404).json({ error: 'Género no encontrado' });
        await genero.destroy();
        res.json({ mensaje: 'Género eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarGeneros, obtenerGenero, crearGenero, actualizarGenero, eliminarGenero };