const express = require('express');
const { contactController } = require('../controllers');
const router = express.Router();

// get all classes
router.post ('/contacts, contactController.getClasses');



module.exports
