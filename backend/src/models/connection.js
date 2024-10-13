const mysql = require('mysql2/promise');
const util = require('util');

const initializeConnection = async () => {
    try{
        const dbConnection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB
        });

        console.log("Conexão bem-sucedida.");

        return dbConnection;

    }
    catch (err){
        console.log("Erro ao conectar com o BD: ", err);
    }
}

module.exports = initializeConnection;