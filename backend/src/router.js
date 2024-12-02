const express = require('express');
const studentsController = require('./controllers/studentsCtrl');
const eventsController = require('./controllers/eventsCtrl');

const router = express.Router();

// students routes

router.get('/students', studentsController.getAll);

router.post('/students/serch', studentsController.getWhere);

router.post('/students', studentsController.create);

router.put('/students/:rm', studentsController.update);

router.delete('/students/:rm', studentsController.deleteByRm)

// events routes

router.get('/events', eventsController.getAll);

module.exports = router;
