const express = require('express');
const router = express.Router()

//Rutas

const taskRoutes = require ('./taskRoutes');
const statusRoutes = require ('./statusRoutes')

//Middelware que indica las rutas

router.use(taskRoutes);
router.use(statusRoutes);

module.exports = router;