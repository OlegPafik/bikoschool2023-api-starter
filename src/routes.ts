import { Router } from "express";

const routes = Router();

// GET /api/memes
routes.get('/memes', (req, res, next) => {
  //res.send([]); https://medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf
  const array = Array(50);
  res.json(array);
  res.sendStatus(200);
  })

export default routes;