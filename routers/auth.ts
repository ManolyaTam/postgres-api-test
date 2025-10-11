import express from 'express';
import jwt from 'jsonwebtoken';

type TUser = {
  username: string,
  password: string
}

const router = express.Router();

router.post('/login', (req: express.Request, res: express.Response) => {
  console.log("here")
  const user: TUser = req.body;
  console.log(user);
  // check if user is found in db

  const toSave = {
    username: user.username,
    isAdmin: false
  }
  // generate jwt and return it
  const token = jwt.sign(toSave, process.env.JWT_SECRET || "hello");
  res.send(token);
})

export default router;