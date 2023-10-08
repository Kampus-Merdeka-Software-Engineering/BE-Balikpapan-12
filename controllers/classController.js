const { classService } = require('../services');

async function getClasses(req, res) {
    const classes = await classService.getAllClasses();

    res.status(200).json(classes);
}

module.exports = {
    getClasses
};