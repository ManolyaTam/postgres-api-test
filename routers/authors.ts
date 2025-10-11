import express from 'express';
import { createAuthor, deleteAuthor, fetchAuthors, updateAuthorName } from '../services/authors';
import { loginCheck } from '../middleware/loginCheck';

type TAuthor = {
  name: string,
  bio: string
}

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  fetchAuthors().then((data) => {
    res.status(200).contentType('application/json').send(data);
  })
})

router.post('/new', loginCheck, (req: express.Request, res: express.Response) => {
  const author: TAuthor = req.body;
  createAuthor(author)
    .then(() => {
      res.status(201).send('Author created');
    }).catch((err) => {
      console.error("ERR while creating author", err);
      res.send("Something went wrong while creating author")
    })
})

router.delete('/', loginCheck, (req: express.Request, res: express.Response) => {
  const { id } = req.query
  console.log("id", id)
  if (!id) return res.status(400).send("id required!");

  deleteAuthor(+id).then(() => [
    res.send("Author Deleted")
  ]).catch((err) => {
    console.error("ERR while deleting author", err);
    res.send("Something went wrong while deleting author")
  })
})

router.post('/:id', loginCheck, (req: express.Request, res: express.Response) => {
  const { name } = req.query
  const { id } = req.params

  if (!id || !name) return res.status(400).send('name and id required!')

  updateAuthorName({ id: +id, name: name as string })
    .then(() => {
      res.send("Author name Updated")
    }).catch((err) => {
      console.error("ERR while updating author name", err);
      res.send("Something went wrong while updating author name")
    })
})

export default router;