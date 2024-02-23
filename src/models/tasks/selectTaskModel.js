//conexion
const getDb = require("../../db/getDb");

const { notFoundError } = require("../../services/errorService");


const selectTaskModel = async (taskId)=>{
    let connection;
    try{
        connection= await getDb();

        const [task] = await connection.query(`
        SELECT *,status.name as statusName FROM tasks 
        INNER JOIN status ON tasks.statusId = status.id
        WHERE tasks.id = ?
        
        `,[taskId]);

        if (task.length<1)  notFoundError(`task`);

        return task;

    }finally{
        if(connection) connection.release();
    }

}

module.exports = selectTaskModel;