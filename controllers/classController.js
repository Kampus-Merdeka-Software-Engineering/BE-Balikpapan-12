const { getAllClasses } = require('../services');

async function getClasses(req, res) {
    const classes = await getAllClasses();

    res.status(200).json(classes);
}

module.exports = {
    getClasses
};