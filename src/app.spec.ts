import app from './app'
import request from 'supertest'

describe("GET /api/memes", () => {
  it("responds with OK", (done) => {
    request(app)
      .get('/api/memes')
      .expect(200, done);
  });
});