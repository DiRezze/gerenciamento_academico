const express = require('express');
const studentsController = require('./controllers/studentsCtrl');

const router = express.Router();

// students routes

router.get('/students', studentsController.getAll);

router.post('/students/serch', studentsController.getWhere);

router.post('/students', studentsController.create);

router.put('/students/:rm', studentsController.update);

router.delete('/students/:rm', studentsController.deleteByRm)

module.exports = router;