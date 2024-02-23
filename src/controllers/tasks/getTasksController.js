const selectAllTasksModel = require('../../models/tasks/selectAllTasksModel');
const { message } = require('../../schemas/tasks/newTaskSchema');

const getTasksController = async (req, res, next) => {
  try {
    const tasks = await selectAllTasksModel();
    res.send({
      status: 'ok',
      data: { tasks },
      message: 'All tasks',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getTasksController;
