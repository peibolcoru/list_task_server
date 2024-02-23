const deleteTaskModel = require('../../models/tasks/deleteTaskModel');

const deletetaskController = async (req, res, next) => {
  try {
    
    const { taskId } = req.params;

    await deleteTaskModel(taskId);

    res.send({
      status: 'ok',
      message: 'Task deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = deletetaskController;
