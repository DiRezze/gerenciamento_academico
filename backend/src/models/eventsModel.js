const initializeConnection = require('./connection');

const getAll = async () => {
    try{
        const pool = await initializeConnection();
        const [events] = await pool.execute("SELECT * FROM events");
        return events;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { getAll }