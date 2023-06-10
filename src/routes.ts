import { Router } from "express";

const routes = Router();

// GET /api/memes
routes.get('/memes', (req, res, next) => {
  res.send([]);
    res.sendStatus(200);
  })

export default routes;