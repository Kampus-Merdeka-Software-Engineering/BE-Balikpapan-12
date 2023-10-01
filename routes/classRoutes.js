const express = require('express');
const { classController } = require('../controllers');
const router = express.Router();

// get all classes
router.get('/classes', classController.getClasses);



module.exports = router;