const request = require('supertest');
const app = require('../app');
require('dotenv').config();
const sequelize = require('../config/database');

describe('GET /api/v1/', () => {
  it('should return all discounts', async () => {
    const response = await request(app).get('/api/v1/');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('code');
      expect(response.body[0]).toHaveProperty('discount_percent');
      expect(response.body[0]).toHaveProperty('is_active');
      expect(response.body[0]).toHaveProperty('valid_until');
      expect(response.body[0]).toHaveProperty('created_at');
      expect(response.body[0]).toHaveProperty('modified_at');
    }
  });
});
