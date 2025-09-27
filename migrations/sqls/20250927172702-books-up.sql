CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    ISBN CHAR(13) UNIQUE,
    genre_id INT,
    CONSTRAINT fk_genre
        FOREIGN KEY (genre_id)
        REFERENCES genres (id)
        ON DELETE SET NULL
);