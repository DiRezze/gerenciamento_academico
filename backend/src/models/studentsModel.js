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

const getWhere = async (params) => {
    try{
        const connection = await initializeConnection();
        const [students] = await connection.execute(`SELECT * FROM alunos WHERE ${params}`);
        return students;
    } catch (err){
        console.log("Erro ao executar a query:", err);
        throw err;
    }
}

const create = async (studentData) => {
    try{
        const connection = await initializeConnection();
        const { nome, email, nascimento, telefone} = studentData;
        const [result] = await connection.execute(
            'INSERT INTO alunos (nome, email, nascimento, telefone) VALUES (?,?,?,?)',
            [nome, email, nascimento, telefone]
        );
        return result.insertId;
    } catch (err){
        console.log("Erro ao criar aluno:", err);
        throw err;
    }

}

const update = async (rm, newData) => {
    try {
        const connection = await initializeConnection();
        const { nome, email, nascimento, telefone} = newData;
        const [result] = await connection.execute(
            'UPDATE alunos SET nome = ?, email = ?, nascimento = ?, telefone = ? WHERE rm = ?',
            [nome, email, nascimento, telefone,rm]
        );
        return result.affectedRows;
    } catch (err) {
        console.log("Erro ao atualizar aluno:", err);
        throw err;
    }
}

const deleteByRm = async (rm) => {
    try {
        const connection = await initializeConnection();
        const [result] = await connection.execute(
            'DELETE FROM alunos WHERE rm = ?',
            [rm]
        );
        return result.affectedRows;
    } catch (err) {
        console.log("Erro ao atualizar aluno:", err);
        throw err;
    }
}

module.exports = {
    getAll,
    getWhere,
    create,
    update,
    deleteByRm
};