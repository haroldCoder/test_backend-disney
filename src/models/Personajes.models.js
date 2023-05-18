const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Personaje = sequelize.define('personajes', {
  Imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Edad: {
    type: DataTypes.NUMBER,
    allowNull: true
  },
  Peso: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  Historia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pelicula_serie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    paranoid: true,
    timestamps: true,
});

module.exports = Personaje;