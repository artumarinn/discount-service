const express = require('express');
const bodyParser = require('body-parser');
const discountRoutes = require('./routes/discountRoutes');
const Discount = require('./models/discountModel');
const sequelize = require('./config/database');

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.use('/api', discountRoutes);

const PORT = 3000;

// Synchronize models with the database and then start the server
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to start the server:', error);
    });
