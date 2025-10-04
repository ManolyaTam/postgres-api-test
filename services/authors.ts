import client from '../db';

type TAuthor = {
  name: string,
  bio: string
}

export const createAuthor = async (author: TAuthor) => {
  const connection = await client.connect();
  return connection.query(`
    INSERT INTO authors(name, bio)
    VALUES('${author.name}', '${author.bio}');
  `)
    .then(() => {
      connection.release();
      console.log("author created")
    })
    .catch((err) => { throw new Error("ERR while creating author", err) })
}

export const fetchAuthors = async () => {
  const connection = await client.connect();
  return connection.query(`
    SELECT * FROM authors;
  `)
    .then((data) => {
      const output = data.rows;
      connection.release();
      console.log(output);
      return output;
    })
    .catch((err) => { throw new Error("ERR while fetching authors", err) })
}

export const updateAuthorName = async ({ name, id }: { name: string, id: number }) => {
  const connection = await client.connect();
  return connection.query(`
    UPDATE authors
    SET name='${name}'
    WHERE id=${id};
  `)
    .then(() => {
      console.log('author name updated')
      connection.release();
    })
    .catch((err) => { throw new Error("ERR while updating author name", err) })
}

export const deleteAuthor = async (id: number) => {
  const connection = await client.connect();
  return connection.query(`
    DELETE from authors
    WHERE id=${id};
    `)
    .then(() => {
      console.log('author deleted')
      connection.release();
    })
    .catch((err) => { throw new Error("ERR while deleting author", err) })
} 