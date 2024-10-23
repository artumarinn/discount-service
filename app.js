const express = require('express');
const bodyParser = require('body-parser');
const discountRoutes = require('./routes/discountRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/discounts', discountRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
