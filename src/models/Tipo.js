const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo = sequelize.define('tipos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(50), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'tipos', timestamps: false });

module.exports = Tipo;