import supertest from 'supertest';
import { app } from '..';

// creating test server
const request = supertest(app);

// suite for resize image endpoint
describe('Testing endpoint responses', () => {

  it('should home route ', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should get the Image Processing API', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});


