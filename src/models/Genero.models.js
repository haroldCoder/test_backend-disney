const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../connection');

const Genero = sequelize.define('genero', {
    id: {
        DataTypes: INT,
        allowNulls: false
    },
    Nombre: {
        DataTypes: STRING,
        allowNulls: false
    },
    Imagen: {
        DataTypes: STRING,
        allowNulls: false
    }
})

module.exports = Genero;