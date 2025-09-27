CREATE TABLE books_authors (
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    is_main_author BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (book_id, author_id),
    CONSTRAINT fk_book
        FOREIGN KEY (book_id)
        REFERENCES books (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_author
        FOREIGN KEY (author_id)
        REFERENCES authors (id)
        ON DELETE CASCADE
);