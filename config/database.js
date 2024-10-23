const { Pool } = require('pg');

const pool = new Pool({
    user: 'artumarin',
    host: 'localhost',
    database: 'discounts',
    password: '1234',
    port: 5432,
});

module.exports = pool;

