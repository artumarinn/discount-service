const discountModel = require('../models/discountModel');

// Crear un descuento
const createDiscount = async (req, res) => {
  const { name, percentage } = req.body;
  try {
    const discount = await discountModel.createDiscount(name, percentage);
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leer todos los descuentos
const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await discountModel.getAllDiscounts();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un descuento
const updateDiscount = async (req, res) => {
  const { id } = req.params;
  const { name, percentage } = req.body;
  try {
    const updatedDiscount = await discountModel.updateDiscount(id, name, percentage);
    if (!updatedDiscount) {
      return res.status(404).json({ message: 'Descuento no encontrado' });
    }
    res.json(updatedDiscount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un descuento
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
  updateDiscount,
  deleteDiscount,
};
