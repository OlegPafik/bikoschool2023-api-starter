import { Request, Response, Router } from "express";

export const routes = Router();

routes.get("/memes", (req: Request, res: Response) => {
  res.status(200).json([]);
});
