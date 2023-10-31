const express = require('express');
const router = express.Router();
const technicianController = require('../controllers/technicianController');

router.get('/get-tasks', technicianController.getTasks);
router.post('/complete-task/:id', technicianController.completeTask);

module.exports = router;
