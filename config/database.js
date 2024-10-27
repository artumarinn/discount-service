const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize a new Sequelize instance using environment variables for database configuration.
// This setup provides a connection to a PostgreSQL database.
const sequelize = new Sequelize(
    process.env.DB_NAME,        
    process.env.DB_USER,        
    process.env.DB_PASSWORD,    
    {
        host: process.env.DB_HOST,  
        dialect: 'postgres',        
        port: process.env.DB_PORT   
    }
);

// Export the Sequelize instance to be used in other parts of the application
module.exports = sequelize;
