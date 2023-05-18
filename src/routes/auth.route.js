const {Router} = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const route = Router();

route.route("/login")
.post(async(req, res)=>{
    try {
        const { username, password } = req.body;
    
        // Verificar si el username y la password están presentes en el req.body
        if (!username || !password) {
          return res.status(400).json({ error: 'El nombre de usuario y la contraseña son requeridos' });
        }
    
        // Lógica para obtener el usuario de la base de datos
        // ...
    
        // Verificar si el usuario existe y si la contraseña es correcta
        const userExists = true; // Lógica para verificar si el usuario existe en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (!userExists || !passwordMatch) {
          return res.status(401).json({ error: 'Credenciales inválidas' });
        }
    
        // Generar el token JWT
        const token = jwt.sign({ username }, process.env.SECRETKEY);
        res.setHeader('Authorization', 'Bearer ' + token);
        // Enviar el token en la respuesta
        res.json({ token });
      } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).json({ error: 'Error al autenticar al usuario' });
      }
})

route.route("/register")
.post(async(req, res)=>{
    try {
        const { username, password } = req.body;
    
        // Verificar si el username y la password están presentes en el req.body
        if (!username || !password) {
          return res.status(400).json({ error: 'El nombre de usuario y la contraseña son requeridos' });
        }
    
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Lógica para guardar el usuario en la base de datos
        // ...
    
        // Generar el token JWT
        const token = jwt.sign({ username }, process.env.SECRETKEY);
        res.setHeader('Authorization', 'Bearer ' + token);
        // Enviar el token en la respuesta
        res.json({ token });
      } catch (error) {
        console.error('Error al registrar al usuario:', error);
        res.status(500).json({ error: 'Error al registrar al usuario' });
      }
})

module.exports = route;

