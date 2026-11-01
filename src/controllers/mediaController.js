const { Media, Genero, Director, Productora, Tipo } = require('../models');
const { Op } = require('sequelize');

const listarMedia = async (req, res) => {
    try {
        const media = await Media.findAll({
            include: [
                { model: Genero, as: 'genero' },
                { model: Director, as: 'director' },
                { model: Productora, as: 'productora' },
                { model: Tipo, as: 'tipo' }
            ]
        });
        res.json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id, {
            include: [
                { model: Genero, as: 'genero' },
                { model: Director, as: 'director' },
                { model: Productora, as: 'productora' },
                { model: Tipo, as: 'tipo' }
            ]
        });
        if (!media) return res.status(404).json({ error: 'Media no encontrada' });
        res.json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const crearMedia = async (req, res) => {
    try {
        const { 
            serial, titulo, sinopsis, url_pelicula, imagen_portada, 
            anio_estreno, genero_id, director_id, productora_id, tipo_id 
        } = req.body;

        // Validar que las relaciones estén Activas (según el requerimiento del PDF)
        const genero = await Genero.findOne({ where: { id: genero_id, estado: 'Activo' } });
        if (!genero) return res.status(400).json({ error: 'Género no válido o inactivo' });

        const director = await Director.findOne({ where: { id: director_id, estado: 'Activo' } });
        if (!director) return res.status(400).json({ error: 'Director no válido o inactivo' });

        const productora = await Productora.findOne({ where: { id: productora_id, estado: 'Activo' } });
        if (!productora) return res.status(400).json({ error: 'Productora no válida o inactiva' });

        const tipo = await Tipo.findByPk(tipo_id);
        if (!tipo) return res.status(400).json({ error: 'Tipo no válido' });

        const nueva = await Media.create({
            serial, titulo, sinopsis, url_pelicula, imagen_portada, 
            anio_estreno, genero_id, director_id, productora_id, tipo_id
        });
        res.status(201).json(nueva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const actualizarMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) return res.status(404).json({ error: 'Media no encontrada' });

        // Validar de nuevo si se envían relaciones
        if (req.body.genero_id) {
            const g = await Genero.findOne({ where: { id: req.body.genero_id, estado: 'Activo' } });
            if (!g) return res.status(400).json({ error: 'Género no válido o inactivo' });
        }
        if (req.body.director_id) {
            const d = await Director.findOne({ where: { id: req.body.director_id, estado: 'Activo' } });
            if (!d) return res.status(400).json({ error: 'Director no válido o inactivo' });
        }
        if (req.body.productora_id) {
            const p = await Productora.findOne({ where: { id: req.body.productora_id, estado: 'Activo' } });
            if (!p) return res.status(400).json({ error: 'Productora no válida o inactiva' });
        }

        await media.update({ ...req.body, fecha_actualizacion: new Date() });
        res.json(media);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) return res.status(404).json({ error: 'Media no encontrada' });
        await media.destroy();
        res.json({ mensaje: 'Media eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarMedia, obtenerMedia, crearMedia, actualizarMedia, eliminarMedia };