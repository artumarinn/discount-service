const express = require('express');
const discountController = require('../controllers/discountController');

const router = express.Router();

router.post('/discounts', discountController.createDiscount);
router.get('/discounts', discountController.getAllDiscounts);
router.get('/discounts/:id', discountController.getDiscountById);
router.put('/discounts/:id', discountController.updateDiscount);
router.delete('/discounts/:id', discountController.deleteDiscount);

module.exports = router;
