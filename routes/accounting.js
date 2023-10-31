const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accountingController');

router.post('/assign-task', accountingController.assignTask);
router.get('/statistics', accountingController.getStatistics);

module.exports = router;
