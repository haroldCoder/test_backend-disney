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
  Peso: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  Historia: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    paranoid: true
});

module.exports = Personaje;