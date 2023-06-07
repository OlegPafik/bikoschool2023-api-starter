import { Request, Response, Router } from "express";
import { LowdbSync } from "lowdb";
import { DatabaseSchema } from "./DatabaseSchema";

export const createRoutes = (db: LowdbSync<DatabaseSchema>) => {
  const routes = Router();

  routes.get("/memes", (req: Request, res: Response) => {
    const memes = db.get("memes").take(50).value();

    res.status(200).json(memes);
  });

  return routes;
};
