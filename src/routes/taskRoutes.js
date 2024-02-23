const express = require('express');
const router = express.Router();

//Controladoress
const { newTaskController, deleteTaskController, getOneTaskController, updateTaskController, getTasksController } = require('../controllers/tasks');

// Importamos las rutas

//nueva tarea
router.post('/tasks/new', newTaskController);
//Una tarea
router.get('/tasks/task/:taskId', getOneTaskController);
//Todas las tareas
router.get('/tasks', getTasksController);
//Borrar tarea
router.delete('/tasks/delete/:taskId',deleteTaskController);
//actualizar tarea
router.put('/tasks/update/:taskId',updateTaskController);


module.exports = router;
