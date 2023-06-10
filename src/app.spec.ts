import app from './app'
import request from 'supertest'

describe("GET /api/memes", () => {
  it("responds with OK", async () => {
    await request(app)
      .get('/api/memes')
      .expect(200);
  });

  it("responds with an array", async () => {
    await request(app)
      .get('/api/memes')
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
      })
  });
});