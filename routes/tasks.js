const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
router.use(authenticate);
const authorize = require('../middleware/authorize');

const {
  getAllTasks, getTaskById, createTask, updateTask, deleteTask, forceDeleteTask,
} = require('../controllers/taskController');

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.delete('/:id/force', authorize('admin'), forceDeleteTask);

module.exports = router;
