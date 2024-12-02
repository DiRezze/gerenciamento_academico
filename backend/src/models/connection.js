const mysql = require('mysql2/promise');

let pool;

const initializeConnection = async () => {
    if(!pool){
        try{
            pool = mysql.createPool({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DB,
                connectionLimit: 10,
                queueLimit: 0,
                waitForConnections: true
            });
    
            console.log("Conexão bem-sucedida.");
    
        }
        catch (err){
            console.log("Erro ao conectar com o BD: ", err);
        }
    }

    return pool;

}

module.exports = initializeConnection;
