import { Request, Response, Router } from "express";
import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { DatabaseSchema } from "./DatabaseSchema";

export const routes = Router();

const adapter = new FileSync<DatabaseSchema>("./data/db.json");
const db = lowdb(adapter);

routes.get("/memes", (req: Request, res: Response) => {
  const memes = db.get("memes").take(50).value();

  res.status(200).json(memes);
});
