import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import createRoutes from "./routes";
import { LowdbSync } from "lowdb";
import { DatabaseSchema } from "./DatabaseSchema";

const createApp = (db: LowdbSync<DatabaseSchema>) => {
    const app: Express = express();

    if (process.env.NODE_ENV !== "test"){
        app.use(morgan("dev"));                         // Shows request log on terminal
    }
    app.use(express.json());                            // Parses incoming requests with JSON payloads
    app.use(express.urlencoded({ extended: false }));   // Parses incoming requests with urlencoded payloads
    app.use('/api', createRoutes(db));

    return app;
}

export default createApp;