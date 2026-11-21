const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
        dialect: process.env.DB_DIALECT,
        logging: false, // Cambia a true si quieres ver las consultas SQL
        // SSL solo si se pide por entorno (Aiven/Render lo exigen; local no)
        dialectOptions: process.env.DB_SSL === 'true'
            ? { ssl: { require: true, rejectUnauthorized: false } }
            : {},
        define: {
            timestamps: false, // Manejaremos las fechas manualmente
            freezeTableName: true // Evita que Sequelize pluralice los nombres
        }
    }
);

module.exports = sequelize;