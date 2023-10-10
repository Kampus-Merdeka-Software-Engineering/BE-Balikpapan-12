const { prisma } = require('../config/prisma');

// POST - CREATE Method
const createContact = async(contact) => {
    try {
        const createdContact = prisma.contact.create({
            data: {
                id_contact: contact.id_contact,
                nama_contact: contact.nama_contact,
                email_contact: contact.email_contact,
                pesan_contact: contact.pesan_contact,
            }
        });
        return createdContact;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createContact
}