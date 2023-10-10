const express = require('express');
const { classController } = require('../controllers');
const classRouter = express.Router();

// get all classes
classRouter.get('/', classController.getClasses);



module.exports = classRouter;