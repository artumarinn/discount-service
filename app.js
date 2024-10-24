const express = require('express');
const bodyParser = require('body-parser');
const discountRoutes = require('./routes/discountRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define routes for the discount API
app.use('/discounts', discountRoutes);

const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
