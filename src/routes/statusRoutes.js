const express= require('express');
const router = express.Router();

//Controladora
const getAllStatusController = require("../controllers/status/getAllStatusController");

router.get('/status',getAllStatusController)

module.exports = router;