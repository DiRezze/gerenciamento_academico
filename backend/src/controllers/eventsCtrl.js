const eventsModel = require('../models/eventsModel');

const getAll = async (req, res) => {

    try{
        const events = await eventsModel.getAll();
        return res.status(200).json(events);
    }catch (err){
        console.log("Erro ao buscar eventos: ", err);
        return res.status(500).json({ message: "Erro ao buscar alunos." });
    }

};

module.exports = { getAll };