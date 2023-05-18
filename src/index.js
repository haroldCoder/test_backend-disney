const express = require("express");
const swaggerSetup = require('./swagger');
const sequelize = require('./connection');

const app = express();

//conectar a swagger
swaggerSetup(app);

//iniciar el servidor
app.listen(3500, ()=>{
    console.log(`Servidor en el puerto 3500`);

    //confirmar conexion a la db
    sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
})
