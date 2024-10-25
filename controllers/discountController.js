const discountModel = require('../models/discountModel');

// Create a discount
const createDiscount = async (req, res) => {
  const { code, percentage } = req.body;
  try {
    const discount = await discountModel.createDiscount(code, percentage);
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all discounts
const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await discountModel.getAllDiscounts();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve a single discount by ID
const getDiscountById = async (req, res) => {
  const { id } = req.params;
  try {
    const discount = await discountModel.getDiscountById(id);
    if (!discount) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a discount
const updateDiscount = async (req, res) => {
  const { id } = req.params;
  const { code, percentage } = req.body;
  try {
    const updatedDiscount = await discountModel.updateDiscount(id, code, percentage);
    if (!updatedDiscount) {
      return res.status(404).json({ message: 'Discount not found' });
    }
    res.json(updatedDiscount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a discount
const deleteDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    await discountModel.deleteDiscount(id);
    res.status(204).send();
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
};

