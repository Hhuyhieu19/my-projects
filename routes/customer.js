const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/mua-hang', customerController.purchase);
router.post('/yeu-cau-bao-hanh', customerController.requestWarranty);

module.exports = router;
