import { Router } from "express";
import low  from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

interface DatabaseSchema {
  memes: Meme[]
}
interface Meme{}

const routes = Router();
const adapter = new FileSync<DatabaseSchema>('./data/db.json')
const db = low(adapter)

// GET /api/memes
routes.get('/memes', (req, res, next) => {
  const memes = db.get("memes").take(50).value();
  console.log(memes)
  res.status(200).json(memes);
  })

export default routes;