const express = require('express');
const discountController = require('../controllers/discountController');

// Create an instance of the Express router
const router = express.Router();

// Define routes for discount operations
router.post('/v1/', discountController.createDiscount);
router.get('/v1/', discountController.getAllDiscounts);
router.get('/v1/:id', discountController.getDiscountById);
router.put('/v1/:id', discountController.updateDiscount);
router.delete('/v1/:id', discountController.deleteDiscount);
router.patch('/v1/invalidate-expired/', discountController.expireDiscount);

module.exports = router;
