import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();

// Shows request log on terminal
// https://github.com/expressjs/morgan
app.use(morgan("dev"));

// Parses incoming requests with JSON payloads
// http://expressjs.com/es/api.html#express.json
app.use(express.json());

// Parses incoming requests with urlencoded payloads
// http://expressjs.com/es/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));

// GET /api/memes
// http://expressjs.com/es/api.html#app.use
app.get("/api/memes", (req: Request, res: Response) => {
  // res.json({ data: "Ajá!" });
  res.sendStatus(200);
});

export default app;