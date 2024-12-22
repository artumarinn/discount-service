const request = require('supertest');

// Test the API GET Request
test('API GET Request Test', async () => {
  const response = await request('http://localhost:3000').get('/api/v1/');

  console.log(response.status); 
  console.log(response.body);
  
  expect(response.status).toBe(200);
  expect(response.body[0].id).toBe(1);
});