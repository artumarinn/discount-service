const express = require('express');
const discountController = require('../controllers/discountController');

// Create an instance of the Express router
const router = express.Router();

// Define routes for discount operations
// POST request to create a new discount
router.post('/v1', discountController.createDiscount);

// GET request to retrieve all discounts
router.get('/v1', discountController.getAllDiscounts);

// GET request to retrieve a specific discount by its ID
router.get('/v1/:id', discountController.getDiscountById);

// PUT request to update a specific discount by its ID
router.put('/v1/:id', discountController.updateDiscount);

// DELETE request to remove a specific discount by its ID
router.delete('/v1/:id', discountController.deleteDiscount);

// Export the router for use in the main application
module.exports = router;
