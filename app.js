const express = require('express');
const bodyParser = require('body-parser');
const discountRoutes = require('./routes/discountRoutes');
const Discount = require('./models/discountModel'); 
const sequelize = require('./config/database'); 

const app = express();

// Middleware para analizar solicitudes JSON entrantes
app.use(bodyParser.json());

// Definir rutas para la API de descuentos
app.use('/api', discountRoutes);

const PORT = 3000;

// Sincronizar modelos y luego iniciar el servidor
sequelize.sync({ alter: true }) // `alter: true` actualizará la tabla si es necesario sin borrar datos
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to start the server:', error);
    });
