import app from './app'
import request from 'supertest'

describe("GET /api/memes", () => {
  it("responds with OK", (done) => {
    request(app)
      .get('/api/memes')
      .expect(200, done);
  });

  it("responds with an array", (done) => {
    request(app)
      .get('/api/memes')
      .expect({ array: []}, done);
  });
});