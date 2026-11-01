const sequelize = require('../config/database');
const Genero = require('./Genero');
const Director = require('./Director');
const Productora = require('./Productora');
const Tipo = require('./Tipo');
const Media = require('./Media');

// Sincronizar la base de datos (crea las tablas si no existen)
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log(' Base de datos sincronizada correctamente');
    } catch (error) {
        console.error(' Error al sincronizar la BD:', error);
    }
};

module.exports = { sequelize, Genero, Director, Productora, Tipo, Media, syncDatabase };