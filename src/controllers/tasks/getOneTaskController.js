const selectTaskModel = require('../../models/tasks/selectTaskModel');

const getOneTaskController = async (req, res, next) => {
  try {
    const { taskId } = req.params;

    const task = await selectTaskModel(taskId);

    res.send({
      status: 'ok',
      data: { task },
      message: 'task selected successfully',
    });
    
  } catch (err) {
    next(err);
  }
};

module.exports = getOneTaskController;
