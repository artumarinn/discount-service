const Discount = require('../models/discountModel');
const { Op } = require('sequelize');

// Create a new discount
const createDiscount = async (req, res) => {
    const { code, discount_percent, is_active, valid_until } = req.body;
    try {
        const discount = await Discount.create({
            code,
            discount_percent,
            is_active,
            valid_until: valid_until ? new Date(valid_until) : null,
            created_at: new Date(),
            modified_at: new Date(),
        });
        res.status(201).json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all discounts
const getAllDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.findAll();
        res.json(discounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a discount by ID
const getDiscountById = async (req, res) => {
    const { id } = req.params;
    try {
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' });
        }
        res.json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a discount by ID
const updateDiscount = async (req, res) => {
    const { id } = req.params;
    const { code, discount_percent, is_active, valid_until } = req.body;
    try {
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' });
        }

        discount.code = code;
        discount.discount_percent = discount_percent;
        discount.is_active = is_active;
        discount.valid_until = valid_until ? new Date(valid_until) : null;
        discount.modified_at = new Date();

        await discount.save();
        res.json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a discount by ID
const deleteDiscount = async (req, res) => {
    const { id } = req.params;
    try {
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' });
        }
        await discount.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Expire discounts that are past their valid_until date
const expireDiscount = async (req, res) => {
    try {
        const currentDate = new Date();
        const expiredDiscounts = await Discount.findAll({
            where: {
                valid_until: {
                    [Op.lt]: currentDate,
                },
                is_active: true,
            },
        });

        for (const discount of expiredDiscounts) {
            await discount.update({ is_active: false });
        }

        res.status(200).json({ message: 'Descuentos vencidos invalidados' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createDiscount,
    getAllDiscounts,
    getDiscountById,
    updateDiscount,
    deleteDiscount,
    expireDiscount,
};
