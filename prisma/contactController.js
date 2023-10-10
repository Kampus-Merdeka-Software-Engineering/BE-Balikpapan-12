const { contactService } = require('../services');

async function createContact(req, res) {
    const contact = req.body;

    const createdContact = await contactService.createContact(contact);

    res.status(201).json({
        message: 'contact created'
    });
}

module.exports = {
    createContact
}