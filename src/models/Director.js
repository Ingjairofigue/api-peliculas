const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Director = sequelize.define('directores', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombres: { type: DataTypes.STRING(100), allowNull: false },
    estado: { type: DataTypes.ENUM('Activo', 'Inactivo'), defaultValue: 'Activo' },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'directores', timestamps: false });

module.exports = Director;