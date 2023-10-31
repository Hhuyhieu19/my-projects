const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/purchase', customerController.purchase);
router.post('/request-warranty', customerController.requestWarranty);

module.exports = router;
