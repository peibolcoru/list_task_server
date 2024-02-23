//conexion
const getDb = require('../../db/getDb');

//errores
const { notFoundError } = require("../../services/errorService");
    
const updateTaskModel = async (taskId,title,text,statusId) =>{
    let connection;
    try{
        connection = await getDb();
        
        //Comprobamos que exista la tarea
        const [task] = await connection.query(`
        SELECT * FROM tasks
        WHERE tasks.id =?`,[taskId])

        if(task.length<1) notFoundError('task')

        //Actualizamos la tarea
        await connection.query(`
        UPDATE tasks SET title=?, text=?, statusId=?, modifiedAt=now()
        WHERE id=?
        `,[title,text,statusId, taskId])

        //Devolvemos la info para actualizar el estado en el front
        return {
            id: taskId,
            title,
            text,
            statusId
        }
    }
    finally{
        if(connection)connection.release();
    }
}
module.exports = updateTaskModel;