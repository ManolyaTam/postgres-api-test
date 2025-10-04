import client from '../db';

type TGenre = {
  title: string,
  description: string
}

export const createGenre = async (genre: TGenre) => {
  const connection = await client.connect();
  connection.query(`
    INSERT INTO genres(name, description)
    VALUES('${genre.title}', '${genre.description}');
  `)
    .then(() => {
      connection.release();
      console.log("genre created")
    })
    .catch((err) => { console.error("ERR while creating genre", err) })
}

export const fetchGenres = async () => {
  const connection = await client.connect();
  connection.query(`
    SELECT * FROM genres;
  `)
    .then((data) => {
      console.log(data.rows)
      connection.release();
    })
    .catch((err) => { console.error("ERR while fetching genres", err) })
}

export const updateGenreTitle = async ({ name, id }: { name: string, id: number }) => {
  const connection = await client.connect();
  connection.query(`
    UPDATE genres
    SET name='${name}'
    WHERE id=${id};
  `)
    .then(() => {
      console.log('genre name updated')
      connection.release();
    })
    .catch((err) => { console.error("ERR while updating genre name", err) })
}

export const deleteGenre = async (id: number) => {
  const connection = await client.connect();
  connection.query(`
    DELETE from genres
    WHERE id=${id};
  `)
    .then(() => {
      console.log('genre deleted')
      connection.release();
    })
    .catch((err) => { console.error("ERR while deleting genre", err) })
}