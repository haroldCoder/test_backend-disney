const {Router} = require("express");
const route = Router();

route.route("/")
.get((req, res)=>{
    res.send("personajes")
})

module.exports = route;