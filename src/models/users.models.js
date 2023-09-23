const { DataTypes } = require('sequelize');
const sequelize = require('../connection');


const user = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = user;