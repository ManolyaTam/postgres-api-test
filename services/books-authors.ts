import client from '../db';

type TBookAuthor = {
  bookId: number,
  authorId: number,
  isMainAuthor: boolean
}

export const createBookAuthorRel = async (rel: TBookAuthor) => {
  const connection = await client.connect();
  connection.query(`
    INSERT INTO books_authors(book_id, author_id, is_main_author)
    VALUES('${rel.bookId}', '${rel.authorId}', '${rel.isMainAuthor}');
  `)
    .then(() => {
      connection.release();
      console.log("relationship created")
    })
    .catch((err) => { console.error("ERR while creating book", err) })
}

export const fetchBookAuthorsRel = async () => {
  const connection = await client.connect();
  connection.query(`
    SELECT * FROM books_authors;
    `)
    .then((data) => {
      console.log(data.rows)
      connection.release();
    })
    .catch((err) => { console.error("ERR while fetching from books_authors", err) })
}

export const deleteBookAuthorRel = async ({ bookId, authorId }: { bookId: number, authorId: number }) => {
  const connection = await client.connect();
  connection.query(`
    DELETE from books_authors
    WHERE book_id=${bookId} and author_id=${authorId};
  `)
    .then(() => {
      console.log('books_author rel deleted')
      connection.release();
    })
    .catch((err) => { console.error("ERR while deleting book_author rel", err) })
}