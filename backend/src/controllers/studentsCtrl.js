const studentsModel = require('../models/studentsModel');

const getAll = async (req, res) => {
    try {
        const students = await studentsModel.getAll();
        return res.status(200).json(students);
    } catch (err) {
        console.error("Erro ao buscar alunos:", err);
        return res.status(500).json({ message: "Erro ao buscar alunos." });
    }
};

const getWhere = async (req, res) => {
    try {
        const { condition } = req.query;
        const students = await studentsModel.getWhere(condition);
        return res.status(200).json(students);
    } catch (err) {
        console.error("Erro ao buscar aluno(s) com a condição:", err);
        return res.status(500).json({ message: "Erro ao buscar aluno(s)." });
    }
}

const create = async (req, res) => {
    const {nome, email, nascimento, telefone} = req.body;
    if(!nome || !email || !nascimento){
        return res.status(400).json({message: "Algum dos campos obrigatórios está faltando"})
    }

    try {
        const studentData = req.body;
        const insertId = await studentsModel.create(studentData);
        return res.status(201).json({ message: "Aluno criado com sucesso!", id: insertId });
    } catch (err) {
        console.error("Erro ao criar aluno:", err);
        return res.status(500).json({ message: "Erro ao criar aluno." });
    }
};

const update = async (req, res) => {
    try {
        const { rm } = req.params;
        const newData = req.body;
        const affectedRows = await studentsModel.update(rm, newData);
        if (affectedRows === 0) {
            return res.status(404).json({ message: "Aluno não encontrado." });
        }
        return res.status(200).json({ message: "Aluno atualizado com sucesso!" });
    } catch (err) {
        console.error("Erro ao atualizar aluno:", err);
        return res.status(500).json({ message: "Erro ao atualizar aluno." });
    }
};

const deleteByRm = async (req, res) => {
    try {
        const { rm } = req.params;
        const affectedRows = await studentsModel.deleteByRm(rm);
        if (affectedRows === 0) {
            return res.status(404).json({ message: "Aluno não encontrado." });
        }
        return res.status(200).json({ message: "Aluno deletado com sucesso!" });
    } catch (err) {
        console.error("Erro ao deletar aluno:", err);
        return res.status(500).json({ message: "Erro ao deletar aluno." });
    }
};

module.exports = {
    getAll, 
    getWhere,
    create,
    update,
    deleteByRm
};
