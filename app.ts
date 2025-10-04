import express from 'express';
import cors from 'cors';
import authorRouter from './routers/authors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/authors", authorRouter)

app.get("/", (req: express.Request, res: express.Response) => {
  console.log("hello")
  res.send("hello")
})

app.listen(port, () => {
  console.log("listening on port 3001")
})