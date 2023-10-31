const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/add-employee', adminController.addEmployee);
router.put('/update-employee/:id', adminController.updateEmployee);
router.delete('/delete-employee/:id', adminController.deleteEmployee);

module.exports = router;
