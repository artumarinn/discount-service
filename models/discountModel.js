const pool = require('../config/database');

// Crear un descuento
const createDiscount = async (name, percentage) => {
    const result = await pool.query('INSERT INTO discounts (name, percentage) VALUES ($1, $2) RETURNING *', [name, percentage]);
    return result.rows[0];
};

// Leer todos los descuentos
const getAllDiscounts = async () => {
    const result = await pool.query('SELECT * FROM discounts');
    return result.rows;
};

// Actualizar un descuento
const updateDiscount = async (id, name, percentage) => {
    const result = await pool.query('UPDATE discounts SET name = $1, percentage = $2 WHERE id = $3 RETURNING *', [name, percentage, id]);
    return result.rows[0];
};

// Eliminar un descuento
const deleteDiscount = async (id) => {
    await pool.query('DELETE FROM discounts WHERE id = $1', [id]);
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    updateDiscount,
    deleteDiscount,
};


