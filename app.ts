import express from 'express';
import cors from 'cors';
import authRouter from './routers/auth';
import authorRouter from './routers/authors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/authors", authorRouter)
app.use("/auth", authRouter)

app.get("/", (req: express.Request, res: express.Response) => {
  console.log("hello")
  res.send("hello")
})

app.all("/", (req: express.Request, res: express.Response) => {
  res.status(404).send("404 Not found :)")
})

app.listen(port, () => {
  console.log("listening on port 3001")
})