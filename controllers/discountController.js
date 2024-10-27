const Discount = require('../models/discountModel');

// Crear un descuento
const createDiscount = async (req, res) => {
  const { code, discount_percent, is_active } = req.body;
  try {
    const discount = await Discount.create({ code, discount_percent, is_active });
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los descuentos
const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un descuento por ID
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

// Actualizar un descuento
const updateDiscount = async (req, res) => {
  const { id } = req.params;
  const { code, discount_percent, is_active } = req.body;
  try {
    const discount = await Discount.findByPk(id);
    if (!discount) {
      return res.status(404).json({ message: 'Discount not found' });
    }

    // Actualizar los campos del descuento
    discount.code = code;
    discount.discount_percent = discount_percent;
    discount.is_active = is_active;
    discount.modified_at = new Date(); // Actualiza la fecha de modificación

    await discount.save();
    res.json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un descuento
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

module.exports = {
  createDiscount,
  getAllDiscounts,
  getDiscountById,
  updateDiscount,
  deleteDiscount,
};
