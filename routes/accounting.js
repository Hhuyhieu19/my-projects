const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accountingController');

router.post('/giao-nhiem-vu', accountingController.assignTask);
router.get('/thong-ke', accountingController.getStatistics);

module.exports = router;
