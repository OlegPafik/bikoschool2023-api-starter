import createApp from './app'
import request from 'supertest'
import db from "./database"

const app = createApp(db);

describe("GET /api/memes", () => {
  it("responds with OK", async () => {
    await request(app)
      .get('/api/memes')
      .expect(200);
  });

  it("responds with an array", async () => {
    const response = await request(app).get('/api/memes')
    expect(response.body).toBeInstanceOf(Array);
  });

  it("responds with 50 elements", async () => {
    const response = await request(app).get('/api/memes')
    expect(response.body).toHaveLength(50);
  });
});