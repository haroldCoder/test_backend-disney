const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Genero = require("./Genero.models")

const Movie = sequelize.define('peliculaseries', {
    Imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Calificacion: {
        type: DataTypes.TINYINT,
        allowNull: false
    } 
},{
    tableName: 'peliculaserie', // Cambiar el nombre de la tabla
    timestamps: false
})

module.exports = Movie;