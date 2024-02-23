
const getDb = require('./getDb');

require('dotenv').config();

const main = async () => {
    let connection;
    try {

        connection = await getDb();
        
        console.log('Creando base de datos')
        await connection.query('CREATE DATABASE IF NOT EXISTS list ')
        await connection.query('USE list')

        console.log('Borrando tablas...')
        
        await connection.query('DROP TABLE IF EXISTS tasks')
        await connection.query('DROP TABLE IF EXISTS status')
       
        
        console.log('Creando tablas')

        await connection.query(`
        CREATE TABLE IF NOT EXISTS status (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR (100) UNIQUE  DEFAULT 'inprogress'
        )
        `)

        await connection.query(`
        INSERT INTO  status (name) VALUES ('pending'),('inprogress'), ('completed')`)

        await connection.query(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            statusId INT UNSIGNED NOT NULL, 
            title VARCHAR (100) NOT NULL,
            text VARCHAR(400),
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME,
            FOREIGN KEY(statusId) REFERENCES status(id)
        )
        `)
    
    } catch (error) {
        console.error(error)
    }
    finally{
        if(connection) connection.release();
        process.exit();
    }
}

main()
