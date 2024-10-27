const express = require('express');
const discountController = require('../controllers/discountController');

const router = express.Router();

router.post('/v1', discountController.createDiscount);
router.get('/v1', discountController.getAllDiscounts);
router.get('/v1/:discount_id', discountController.getDiscountById);
router.put('/v1/:discount_id', discountController.updateDiscount);
router.delete('/v1/:discount_id', discountController.deleteDiscount);

module.exports = router;