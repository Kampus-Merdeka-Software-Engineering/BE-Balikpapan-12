const contactController = require('../controllers/contactController');
const express = require('express');
const contactRouter = express.Router();


// POST - CREATE Method
contactRouter.post('/', contactController.createContact);


module.exports = contactRouter;