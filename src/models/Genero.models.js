const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Movie = require("./Movies.models");

const Genero = sequelize.define('genero', {
    id: {
        type: DataTypes.INTEGER,
        allowNulls: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNulls: false
    },
    Imagen: {
        type: DataTypes.STRING,
        allowNulls: false
    },
    Id_pelicula: {
        type: DataTypes.INTEGER,
        allowNulls: false,
        references: {
            model: 'peliculaserie',
            key: 'id'
        }
    }
})

module.exports = Genero;