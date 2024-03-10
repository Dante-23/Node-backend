const express = require('express')
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask, getTaskWithName} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
router.route('/name/:name').get(getTaskWithName);

module.exports = router;