import { Router } from "express";
import db from "./database"

const routes = Router();

// GET /api/memes
routes.get('/memes', (req, res, next) => {
  const memes = db.get("memes").take(50).value();
  console.log(memes)
  res.status(200).json(memes);
  })

export default routes;