const getDb = require ('../../db/getDb.js')

const selectAllStatusModel = async ()=>{
    let connection;
    try{
        connection= await getDb();
        const[allStatus] = await connection.query(`
        SELECT * FROM status
        `)
        
        return allStatus;
    }
    finally{
        if(connection)connection.release()
    }
}

module.exports = selectAllStatusModel;
