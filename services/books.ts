import client from '../db';

type TBook = {
  title: string,
  description: string,
  isbn: string,
  genreId: number
}

export const createBook = async (book: TBook) => {
  const connection = await client.connect();
  connection.query(`
    INSERT INTO books(title, description, ISBN, genre_id)
    VALUES('${book.title}', '${book.description}', '${book.isbn}', '${book.genreId}');
  `)
    .then(() => {
      connection.release();
      console.log("book created")
    })
    .catch((err) => { console.error("ERR while creating book", err) })
}

export const fetchBooks = async () => {
  const connection = await client.connect();
  connection.query(`
    SELECT * FROM books;
    `)
    .then((data) => {
      console.log(data.rows)
      connection.release();
    })
    .catch((err) => { console.error("ERR while fetching books", err) })
}

export const updateBookTitle = async ({ title, id }: { title: string, id: number }) => {
  const connection = await client.connect();
  connection.query(`
    UPDATE books
    SET title='${title}'
    WHERE id=${id};
  `)
    .then(() => {
      console.log('book title updated')
      connection.release();
    })
    .catch((err) => { console.error("ERR while updating book title", err) })
}

export const deleteBook = async (id: number) => {
  const connection = await client.connect();
  connection.query(`
    DELETE from books
    WHERE id=${id};
  `)
    .then(() => {
      console.log('book deleted')
      connection.release();
    })
    .catch((err) => { console.error("ERR while deleting book", err) })
}