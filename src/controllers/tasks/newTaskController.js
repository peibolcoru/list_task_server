//Modelos
const insertTaskModel = require('../../models/tasks/insertTaskModel');
const validateSchema = require('../../utils/validateSchema');
const newTaskSchema = require('../../schemas/tasks/newTaskSchema');

const newTaskController = async (req, res, next) => {
  try {
    const { title, text, statusId } = req.body;

    //VALIDAMOS LOS CAMPOS

    await validateSchema(newTaskSchema, req.body);

    //Creamos la tarea

    const task = await insertTaskModel(title, text, statusId);

    res.send({
      status: 'ok',
      data: {
        task,
      },
      message: 'Task created successfully',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = newTaskController;
