const express = require("express");
const swaggerSetup = require('./swagger');

const app = express();


swaggerSetup(app);


app.listen(3500, ()=>{
    console.log(`Server on port 3500`);
})
