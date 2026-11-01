const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false, // Cambia a true si quieres ver las consultas SQL
        define: {
            timestamps: false, // Manejaremos las fechas manualmente
            freezeTableName: true // Evita que Sequelize pluralice los nombres
        }
    }
);

module.exports = sequelize;