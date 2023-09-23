CREATE TABLE genero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Imagen VARCHAR(255) NOT NULL,
    Id_pelicula INT,
    FOREIGN KEY (Id_pelicula) REFERENCES movies(id)
);