const express = require('express');
const router = express.Router();
const technicianController = require('../controllers/technicianController');

router.get('/nhan-nhiem-vu', technicianController.getTasks);
router.post('/hoan-thanh-nhiem-vu/:id', technicianController.completeTask);

module.exports = router;
