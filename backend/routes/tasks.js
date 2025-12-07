const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/', (req, res) => {
  const { title, description, status, dueDate } = req.body;
  if (!title || !status || !dueDate) {
    return res.render('index', { 
      task: null, 
      error: 'Title, Status, and Due Date are required.' 
    });
  }


  const newTask = new Task(title, description, status, dueDate);

  //store in-memory
  Task.tasks.push(newTask);

  res.render('index', { task: newTask, error: null });
});

module.exports = router;
