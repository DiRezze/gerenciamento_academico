const initializeConnection = require('./connection');

const getAll = async () => {
    try {
        const connection = await initializeConnection();
        const [students] = await connection.execute("SELECT * FROM alunos");
        return students;
    }
    catch (err) {
        console.log("Erro ao executar a query: ", err);
        throw err;
    }
};

module.exports = {
    getAll
};