const express = require("express");
require("dotenv").config()
const swaggerSetup = require('./swagger');
const sequelize = require('./connection');
const verifyToken = require("./authmiddleware");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//conectar a swagger
swaggerSetup(app);

app.use("/auth", require("./routes/auth.route"));


app.use("/characters", verifyToken, require("./routes/personajes.route"))

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
