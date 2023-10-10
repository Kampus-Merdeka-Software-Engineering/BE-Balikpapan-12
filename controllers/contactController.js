const contactService = require('../services/contactService');

// POST - CREATE Method
async function createContact(req, res) {
    try {
        const contact = await contactService.createContact(req.body);
        res.status(201).json({
            message: "Success POST/CREATE Contact",
            data: contact
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


module.exports = {
    createContact
}