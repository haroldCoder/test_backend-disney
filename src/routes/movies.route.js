const {Router} = require("express");
const route = Router();
const Movie = require("../models/Movies.models");
const Personaje = require("../models/Personajes.models");
const Genero = require("../models/Genero.models");

route.route("/")
.get(async(req, res)=>{
    try{
        const { name, genre, order } = req.query;

        const options = {
            attributes: ['Imagen', 'Titulo', 'Fecha'],
        };

        if (name) {
            options.where = { Titulo: name };
        }

        if (genre) {
            options.include = {
                model: Genero,
                where: { id: genre },
                attributes: []
            };
        }

        if (order) {
            options.order = [['Fecha', order.toUpperCase()]];
        }

        const movies = await Movie.findAll(options);
        res.json(movies);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Error al obtener las peliculas/series' });
    }
})

.post(async(req, res)=>{
    try{
        const {imagen, titulo, fecha, calificacion} = req.body;
        console.log(imagen);
        const nuevaMovie = Movie.create({
            "Imagen": imagen,
            "Titulo": titulo,
            "Fecha": fecha,
            "Calificacion": calificacion
        })

        res.json(nuevaMovie);
    }
    catch(err){
        console.log(err);
        res.json({err: 'ocurrio un error al añadir la pelicula/series'});
    }
})

route.route(":/id")

.delete(async(req, res)=>{
    try {
        // Obtener el id por parámetros
        const { id } = req.params;
    
        await Movie.destroy({ where: { id } });
        res.json({ success: true });
      } catch (err) {
        console.error(err);
        res.json({ error: 'Ocurrió un error al eliminar la pelicula/series' });
      }
})

.put(async(req, res)=>{
    try{
        const { id } = req.params;
        const {imagen, titulo, fecha, calificacion} = req.body;
    
        const movie = await Movie.findByPk(id);

        //si el personaje no existe devuelve un error 404
        if (!movie) {
        return res.status(404).json({ error: 'Pelicula/series no encontrado' });
        }

        // Actualizar los atributos del personaje
        movie.Imagen = imagen;
        movie.Titulo = titulo;
        movie.Fecha = fecha;
        movie.Calificacion = calificacion;

        // Guardar los cambios en la base de datos
        await movie.save();

        res.json(movie);
    }
    catch(err){
        console.log(err);
        res.json({err: 'Ocurrio un error al actualizar la pelicula'});
    }
})

.get(async (req, res) => {
    try {
      const { id } = req.params;

      // Obtener los detalles de la película/serie por su ID
      const pelicula = await Movie.findByPk(id, {
        include: [Personaje], // Incluir los personajes relacionados
      });

      if (!pelicula) {
        return res.status(404).json({ error: "Película/serie no encontrada" });
      }

      res.json(pelicula);
    } catch (error) {
      console.error("Error al obtener los detalles de la película/series:", error);
      res.status(500).json({ error: "Error al obtener los detalles de la película/series" });
    }
  });

  module.exports = route