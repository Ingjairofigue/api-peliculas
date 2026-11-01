const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Genero = require('./Genero');
const Director = require('./Director');
const Productora = require('./Productora');
const Tipo = require('./Tipo');

const Media = sequelize.define('media', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    serial: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    titulo: { type: DataTypes.STRING(150), allowNull: false },
    sinopsis: { type: DataTypes.TEXT },
    url_pelicula: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    imagen_portada: { type: DataTypes.STRING(255) },
    anio_estreno: { type: DataTypes.INTEGER },
    genero_id: { type: DataTypes.INTEGER, allowNull: false },
    director_id: { type: DataTypes.INTEGER, allowNull: false },
    productora_id: { type: DataTypes.INTEGER, allowNull: false },
    tipo_id: { type: DataTypes.INTEGER, allowNull: false },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'media', timestamps: false });

// Relaciones (Foreign Keys)
Media.belongsTo(Genero, { foreignKey: 'genero_id', as: 'genero' });
Media.belongsTo(Director, { foreignKey: 'director_id', as: 'director' });
Media.belongsTo(Productora, { foreignKey: 'productora_id', as: 'productora' });
Media.belongsTo(Tipo, { foreignKey: 'tipo_id', as: 'tipo' });

module.exports = Media;