const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
// TODO: altarar o parâmetro do cors para o url da aplicação hospedada
app.use(cors()); // permite o acesso da API apenas às rotas passadas como parâmetro do cors
app.use(express.json());

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'etec'
});

database.connect((errors)=>{
    if(errors){
        console.log("Erro(s) ao conectar com o banco de dados:", errors);
    } else {
        console.log("Conexão bem sucedida!");
    }
});

const getAllDataFrom = (tableName, res) => {
    const query = `SELECT * FROM ${tableName}`;
    database.query(query, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({error: 'Erro ao buscar os alunos'});
        } else {
            res.json(results);
        }
    })    
} 

app.get('/alunos', (req, res) => {
    getAllDataFrom('alunos', res);
});


// inicia o servidor backend
const port = 8089;
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
});
