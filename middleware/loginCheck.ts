import express from "express"
import jwt from "jsonwebtoken"

export const loginCheck = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.headers['authorization']?.split(" ")[1]; // given that it starts with Bearer
  if (!token) return res.status(400).end();
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET || "hello")
    console.log(result)
    next();
  } catch (e) {
    // console.log(e)
    return res.status(400).send("You need to log in first");
  }
}