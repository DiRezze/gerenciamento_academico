const dbConnection = require('./connection');

const getAllStudents = async () => {
    const students = await dbConnection.query('SELECT * FROM alunos');
    return students;
};

module.exports = {
    getAllStudents
};