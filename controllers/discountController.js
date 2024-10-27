const Discount = require('../models/discountModel');

// Create a new discount
const createDiscount = async (req, res) => {
    const { code, discount_percent, is_active } = req.body;
    try {
        // Create a new discount entry in the database
        const discount = await Discount.create({ code, discount_percent, is_active });
        res.status(201).json(discount); // Respond with the created discount and status 201 (Created)
    } catch (error) {
        // Handle any errors that occur during discount creation
        res.status(500).json({ error: error.message });
    }
};

// Retrieve all discounts
const getAllDiscounts = async (req, res) => {
    try {
        // Fetch all discount entries from the database
        const discounts = await Discount.findAll();
        res.json(discounts); // Respond with the list of discounts
    } catch (error) {
        // Handle any errors that occur during retrieval
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a discount by its ID
const getDiscountById = async (req, res) => {
    const { id } = req.params; // Extract the discount ID from the request parameters
    try {
        // Find the discount in the database using its primary key
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' }); // Respond with 404 if not found
        }
        res.json(discount); // Respond with the found discount
    } catch (error) {
        // Handle any errors that occur during retrieval
        res.status(500).json({ error: error.message });
    }
};

// Update an existing discount
const updateDiscount = async (req, res) => {
    const { id } = req.params; // Extract the discount ID from the request parameters
    const { code, discount_percent, is_active } = req.body; // Get updated fields from request body
    try {
        // Find the discount in the database
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' }); // Respond with 404 if not found
        }

        // Update discount fields
        discount.code = code;
        discount.discount_percent = discount_percent;
        discount.is_active = is_active;
        discount.modified_at = new Date(); // Update the modified date

        await discount.save(); // Save the updated discount back to the database
        res.json(discount); // Respond with the updated discount
    } catch (error) {
        // Handle any errors that occur during the update
        res.status(500).json({ error: error.message });
    }
};

// Delete a discount
const deleteDiscount = async (req, res) => {
    const { id } = req.params; // Extract the discount ID from the request parameters
    try {
        // Find the discount in the database
        const discount = await Discount.findByPk(id);
        if (!discount) {
            return res.status(404).json({ message: 'Discount not found' }); // Respond with 404 if not found
        }
        await discount.destroy(); // Delete the discount from the database
        res.status(204).send(); // Respond with 204 (No Content) indicating successful deletion
    } catch (error) {
        // Handle any errors that occur during deletion
        res.status(500).json({ error: error.message });
    }
};

// Export all controller functions for use in routing
module.exports = {
    createDiscount,
    getAllDiscounts,
    getDiscountById,
    updateDiscount,
    deleteDiscount,
};
