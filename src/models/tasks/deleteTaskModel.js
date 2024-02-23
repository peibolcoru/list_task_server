//conexion
const getDb = require("../../db/getDb");

//errores
const { notFoundError } = require("../../services/errorService");

const deleteTaskModel = async (taskId)=>{
    let connection;
    try{
        connection= await getDb();
        //Comprobamos que exista la tarea
        const [task] = await connection.query(`
        SELECT * FROM tasks
        WHERE tasks.id =?`,[taskId])

        if(task.length<1) notFoundError('task')

        await connection.query(`
        DELETE FROM tasks WHERE id = ?
        `,[taskId]);
        
    }finally{
        if(connection) connection.release();
    }

}

module.exports = deleteTaskModel;