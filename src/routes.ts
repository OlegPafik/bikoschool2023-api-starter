import { Router } from "express";
import { DatabaseSchema } from './DatabaseSchema'
import { LowdbSync } from "lowdb";

const createRoutes = (db: LowdbSync<DatabaseSchema>) => {
  const routes = Router();

  // GET /api/memes
  routes.get('/memes', (req, res, next) => {
    const memes = db.get("memes").take(50).value();
    res.status(200).json(memes);
    })

  return routes;
}

export default createRoutes;