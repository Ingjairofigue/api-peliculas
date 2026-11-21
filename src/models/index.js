const sequelize = require('../config/database');
const Genero = require('./Genero');
const Director = require('./Director');
const Productora = require('./Productora');
const Tipo = require('./Tipo');
const Media = require('./Media');

// Datos base: se insertan solo si la tabla correspondiente esta vacia.
// Asi Aiven arranca con generos/directores/productoras/tipos minimos
// y el MySQL local nunca se duplica.
const seedDatosBase = async () => {
    const generos = ['Accion', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficcion'];
    for (const nombre of generos) {
        await Genero.findOrCreate({ where: { nombre } });
    }

    await Director.findOrCreate({ where: { nombre: 'Desconocido' } });
    await Productora.findOrCreate({ where: { nombre: 'Independiente' } });
    await Tipo.findOrCreate({ where: { nombre: 'Pelicula' } });
    await Tipo.findOrCreate({ where: { nombre: 'Serie' } });

    console.log(' Datos base verificados (seed)');
};

// Sincronizar la base de datos (crea las tablas si no existen)
const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log(' Base de datos sincronizada correctamente');
        await seedDatosBase();
    } catch (error) {
        console.error(' Error al sincronizar la BD:', error);
    }
};

module.exports = { sequelize, Genero, Director, Productora, Tipo, Media, syncDatabase };