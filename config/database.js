const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

console.log('Database configuration:', {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_SSL: process.env.DB_SSL,
  });
  

const sequelize = new Sequelize(
    process.env.DB_NAME,        
    process.env.DB_USER,        
    process.env.DB_PASSWORD,    
    {
        host: process.env.DB_HOST,  
        dialect: 'postgres',        
        port: process.env.DB_PORT,
        logging: false,
    }
);

// Export the Sequelize instance
module.exports = { sequelize, DataTypes };
