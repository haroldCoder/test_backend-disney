const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Genero = require("./Genero.models");

const Movie = sequelize.define('peliculaserie', {
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
})
Movie.belongsTo(Genero, { foreignKey: 'generoId' });
module.exports = Movie;