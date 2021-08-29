const express = require('express');
const router = express.Router();
const { getTasks, getTask, addTask, deleteTask, updateTask } = require('../controllers/tasks')

//Get Tasks
router.get('/', getTasks);

//Get Task
router.get('/:taskId', getTask);

//Add Task
router.post('/', addTask);

//Delete Task
router.delete('/:taskId', deleteTask);

//Update Task
router.put('/:taskId', updateTask);

module.exports.tasks = router;