const studentsModel = require('../models/studentsModel');

const getAll = async (req, res) => {
    const students = await studentsModel.getAll();
    return res.status(200).json(students);
};

module.exports = { getAll };
