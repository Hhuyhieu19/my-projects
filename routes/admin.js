const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/them-nhan-vien', adminController.addEmployee);
router.put('/cap-nhat-thong-tin-nhan-vien/:id', adminController.updateEmployee);
router.delete('/xoa-nhan-vien/:id', adminController.deleteEmployee);

module.exports = router;
