const express = require('express');
const studentsController = require('./controllers/studentsCtrl');

const router = express.Router();

router.get('/students', studentsController.getAll);

module.exports = router;