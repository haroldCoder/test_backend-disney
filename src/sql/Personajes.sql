CREATE TABLE Personaje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Imagen VARCHAR(255) NOT NULL,
    Nombre VARCHAR(255) NOT NULL,
    Edad INT,
    Peso FLOAT,
    Historia TEXT NOT NULL,
    pelicula_serie_id INT NOT NULL,
    FOREIGN KEY (pelicula_serie_id) REFERENCES movies(id)
);