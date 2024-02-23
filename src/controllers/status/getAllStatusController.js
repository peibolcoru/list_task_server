const selectAllStatusModel = require("../../models/status/selectAllStatusModel")

const getAllStatusController = async (req,res,next) =>{
    try {

        const labels = await selectAllStatusModel();

        res.send({
            status:'ok',
            data:{labels}
            })
    } catch (err) {
        next(err)       
    }

}
module.exports = getAllStatusController;