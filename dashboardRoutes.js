const express = require("express");

const router = express.Router();

let tasks =[];

//POST - Create a new task to Project Dashboard

router.post('/api/users', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(200).send('Task Created Successfully Complted!');
});

// Display a list of all tasks from dashboard
router.get('/api/users', (req, res) => {
    res.status(200).json(tasks);
});

//Display a specific task - ID
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

// Update a specific task - ID
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTaskdetails = req.body;
    let task = tasks.find(t => t.id === taskId);
    if (task) {
        Object.assign(task, updateTaskDetails);
        res.status(200).send('Task updated Successfully');
    } else {
        res.status(404).send('Task not found');
    }
});

// Delete a specific task - ID 
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).send('Task deleted successfully!');
    } else {
        res.status(404).send('Task not found');
    }
})

module.exports = router;