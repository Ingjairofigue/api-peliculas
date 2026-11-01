const { Productora } = require('../models');

const listarProductoras = async (req, res) => {
    try {
        const { estado } = req.query;
        const where = estado ? { estado } : {};
        const productoras = await Productora.findAll({ where });
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerProductora = async (req, res) => {
    try {
        const productora = await Productora.findByPk(req.params.id);
        if (!productora) return res.status(404).json({ error: 'Productora no encontrada' });
        res.json(productora);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearProductora = async (req, res) => {
    try {
        const { nombre, slogan, descripcion, estado } = req.body;
        const nueva = await Productora.create({ nombre, slogan, descripcion, estado });
        res.status(201).json(nueva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const actualizarProductora = async (req, res) => {
    try {
        const productora = await Productora.findByPk(req.params.id);
        if (!productora) return res.status(404).json({ error: 'Productora no encontrada' });
        await productora.update({ ...req.body, fecha_actualizacion: new Date() });
        res.json(productora);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarProductora = async (req, res) => {
    try {
        const productora = await Productora.findByPk(req.params.id);
        if (!productora) return res.status(404).json({ error: 'Productora no encontrada' });
        await productora.destroy();
        res.json({ mensaje: 'Productora eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarProductoras, obtenerProductora, crearProductora, actualizarProductora, eliminarProductora };