const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Productora = sequelize.define('productoras', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    slogan: { type: DataTypes.STRING(150) },
    descripcion: { type: DataTypes.TEXT },
    estado: { type: DataTypes.ENUM('Activo', 'Inactivo'), defaultValue: 'Activo' },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'productoras', timestamps: false });

module.exports = Productora;