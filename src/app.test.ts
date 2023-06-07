import { createApp } from "./app";
import request from "supertest";
import { Express } from "express";
import Lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { DatabaseSchema } from "./DatabaseSchema";

describe("/api/memes", () => {
  let app: Express;

  beforeEach(() => {
    const adapter = new FileSync<DatabaseSchema>("./data/db.json");
    const db = Lowdb(adapter);
    app = createApp(db);
  });

  it("endpoint exists", (done) => {
    request(app).get("/api/memes").expect(200, done);
  });

  it("returns a list", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });

  it("returns a list of 50 memes", (done) => {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(50);
        done();
      });
  });
});
