//esquemas
const newTaskSchema = require('../../schemas/tasks/newTaskSchema');
const validateSchema = require('../../utils/validateSchema');

//modelos
const updateTaskModel = require('../../models/tasks/updateTaskModel');

const updateTaskController = async (req, res, next) => {
  try {
    const { taskId } = req.params;
  
    const { title, text, statusId} = req.body;

    //validamos los datos recibidos
    await validateSchema(newTaskSchema, req.body)

    //actualizamos la tarea
    const updatedTask = await updateTaskModel(
      taskId,
      title,
      text,
      statusId
    );

    res.send({
      status: 'ok',
      data: {
        updatedTask,
      },
      message: 'Task updated successfully',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = updateTaskController;
