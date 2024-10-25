const pool = require('../config/database');

// Create discounts
const createDiscount = async (code, percentage) => {
    const result = await pool.query('INSERT INTO discounts (code, percentage) VALUES ($1, $2) RETURNING *', [code, percentage]);
    return result.rows[0];
};

// Read discounts
const getAllDiscounts = async () => {
    const result = await pool.query('SELECT * FROM discounts');
    return result.rows;
};

// Read discounts by ID
const getDiscountById = async (id) => {
    const result = await pool.query('SELECT * FROM discounts WHERE id = $1', [id]);
    return result.rows[0];
};

// Update discounts
const updateDiscount = async (id, name, percentage) => {
    const result = await pool.query('UPDATE discounts SET code = $1, percentage = $2 WHERE id = $3 RETURNING *', [code, percentage, id]);
    return result.rows[0];
};

// Delete discounts
const deleteDiscount = async (id) => {
    await pool.query('DELETE FROM discounts WHERE id = $1', [id]);
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    getDiscountById,
    updateDiscount,
    deleteDiscount,
};


