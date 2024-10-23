const express = require('express');
const discountController = require('../controllers/discountController');

const router = express.Router();

router.post('/', discountController.createDiscount);
router.get('/', discountController.getAllDiscounts);
router.put('/:id', discountController.updateDiscount);
router.delete('/:id', discountController.deleteDiscount);

module.exports = router;
