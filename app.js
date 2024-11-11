const express = require('express');
const bodyParser = require('body-parser');
const discountRoutes = require('./routes/discountRoutes');
const Discount = require('./models/discountModel');
const sequelize = require('./config/database');

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define routes for the discount API
app.use('/api', discountRoutes);

const PORT = 3000; // Define the port for the server

// Synchronize models with the database and then start the server
sequelize.sync({ alter: true })
    .then(() => {
        // Start the server and listen on the defined port
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`); // Log server URL
        });
    })
    .catch((error) => {
        // Log any errors that occur during server startup
        console.error('Unable to start the server:', error);
    });
