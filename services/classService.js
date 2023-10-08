const { prisma } = require('../config/prisma');

async function getAllClasses() {
    try {
        const classes = await prisma.class.findMany();

        return classes;
    } catch (error) {
        console.error(error);

        throw new Error()
    }
}

module.exports = {
    getAllClasses
};