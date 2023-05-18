const {Router} = require("express");
const route = Router();
const Personaje = require("../models/Personajes.models");
const { where } = require("sequelize");

route.route("/")
.get(async(req, res)=>{
    try{
        const { name, age, movies } = req.query;
        let whereCondition = {};

        if (name) {
            whereCondition.Nombre = name;
        }

        if (age) {
            whereCondition.Edad = age;
        }

        if (movies) {
            whereCondition.pelicula_serie_id = movies;
        }
        // si no ocurre ningun error, pasa a hacer una busqueda en sequelize, en donde solo va a objtener el nombre y la imagen
        const personajes = await Personaje.findAll({
            where: whereCondition,
            attributes: ['Nombre', 'Imagen']
          });
        res.json(personajes);
    }
    catch(err){
        console.error('Error al obtener los personajes:', err);
        res.status(500).json({ error: 'Error al obtener los personajes' });
    }
})

.post(async(req, res)=>{
    try{
        const { imagen, nombre, edad, peso, historia} = req.body;

        const nuevoPersonaje = await Personaje.create({
            imagen,
            nombre,
            edad,
            peso,
            historia,
        })
    }
    catch(err){
        console.log(err);
        res.json({err: "se ha producido un error al agregar el personaje"})
    }
})

route.route(":/id")
.delete(async (req, res) => {
    try {
      // Obtener el id por parámetros
      const { id } = req.params;
  
      await Personaje.destroy({ where: { id } });
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.json({ error: 'Ocurrió un error al eliminar el personaje' });
    }
})

.put(async(req, res)=>{
    try{
        const {id} = req.params;
        const { imagen, nombre, edad, peso, historia} = req.body;

        // Buscar el personaje por su ID
        const personaje = await Personaje.findByPk(id);

        //si el personaje no existe devuelve un error 404
        if (!personaje) {
        return res.status(404).json({ error: 'Personaje no encontrado' });
        }

        // Actualizar los atributos del personaje
        personaje.imagen = imagen;
        personaje.nombre = nombre;
        personaje.edad = edad;
        personaje.peso = peso;
        personaje.historia = historia;

        // Guardar los cambios en la base de datos
        await personaje.save();

        res.json(personaje);
    }
    catch(err){
        console.log(err);
        res.json({err: 'ha ocurrido un error actualizando el personaje'})
    }
})

.get(async(req, res)=>{
    try {
        const { id } = req.params;
  
        // Buscar el personaje por su ID incluyendo las películas o series relacionadas
        const personaje = await Personaje.findByPk(id, {
          include: [{ model: PeliculaSerie }]
        });
  
        // Si el personaje no existe, devolver un error 404
        if (!personaje) {
          return res.status(404).json({ error: 'Personaje no encontrado' });
        }
  
        res.json(personaje);
      } catch (err) {
        console.error('Error al obtener el detalle del personaje:', err);
        res.status(500).json({ error: 'Error al obtener el detalle del personaje' });
      }
})

module.exports = route;