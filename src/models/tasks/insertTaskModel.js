//Importamos la conexion
const getDb = require("../../db/getDb");

const insertTaskModel = async (title,text,statusId)=>{
    let connection;
    try{
        connection = await getDb();

        //Insertamos la tarea
        const [task] = await connection.query(`
            INSERT INTO tasks(title,text,statusId) VALUES(?,?,?)
            `,[title,text,statusId]);

        return {
                taskId:task.insertId,
                title,
                text,
                statusId
                }

    }finally{
        if(connection)connection.release();
    }
}
module.exports = insertTaskModel;