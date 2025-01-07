const request = require('supertest');

// Test the API GET Request
test('API GET Request Test', async () => {
  const response = await request('http://localhost:3000').get('/api/v1/');

  console.log(response.status); 
  console.log(response.body);
  
  expect(response.status).toBe(200);
  expect(response.body[0].id).toBe(1);
});

// Test the API POST Request
test('API POST Request Test', async () => {
  const response = await request('http://localhost:3000').post('/api/v1/').send({
    code: "DISCOUNT2025",
    discount_percent: 800,
    is_active: true,
    valid_until: "2025-11-31T23:59:59.000Z"
  });

  console.log(response.status); 
  console.log(response.body);
  
  expect(response.status).toBe(201);
});

// Test the API PUT Request
test('API PUT Request Test', async () => {
  const response = await request('http://localhost:3000').put('/api/v1/1').send({
    code: "DISCOUNT2025",
    discount_percent: 30,
    is_active: true,
    valid_until: "2025-05-31T23:59:59.000Z"
  });

  console.log(response.status); 
  console.log(response.body);
  
  expect(response.status).toBe(200);
});