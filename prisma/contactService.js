const { prisma } = require('../config/prisma');

async function getContact() {
    try {
        const contacts = await prisma.contact.findMany();

        return contacts;
    } catch (error) {
        console.error( error );

        throw new Error()
    }
}

async function storeContact(data){
    try {
        const contact = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                message: data.message,
            }
        })

        return contact;

    } catch (error) {
        console.error(error);
    
        throw new error()
    }
}

module.exports = {
    getContact
};