//Conexion a la base de datos
const getDb = require("../../db/getDb");

const { emptytaskError } = require("../../services/errorService");

const selecAllTasksModel = async ()=>{
    let connection;
    try{
        connection = await getDb();

        const [tasks] = await connection.query(`
        SELECT tasks.*,status.name as statusName FROM tasks 
        INNER JOIN status ON tasks.statusId = status.id `);

        if (tasks.length<1)  emptytaskError();

        return tasks;

    }finally{
        if(connection) connection.release();
    }
}

module.exports = selecAllTasksModel;