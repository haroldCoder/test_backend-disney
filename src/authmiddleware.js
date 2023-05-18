const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    // Verificar si el token está presente en los headers de la solicitud
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    // Verificar y decodificar el token JWT
    try {
      const decoded = jwt.verify(token, process.env.SECRETKEY);
      req.user = decoded; // Agregar los datos del usuario al objeto req para uso posterior
      next(); // Pasar al siguiente middleware o ruta
    } catch (error) {
      console.error('Error al verificar el token:', error);
      res.status(401).json({ error: 'Token inválido' });
    }
  };

  module.exports = verifyToken;