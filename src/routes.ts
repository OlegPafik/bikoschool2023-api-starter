import { Request, Response, Router } from "express";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export const routes = Router();

interface DatabaseSchema {
  memes: Meme[];
}

interface Meme {}

const adapter = new FileSync<DatabaseSchema>("./data/db.json");
const db = lowdb(adapter);

routes.get("/memes", (req: Request, res: Response) => {
  const memes = db.get("memes").take(50).value();

  res.status(200).json(memes);
});
