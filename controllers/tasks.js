const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
 
const getTask = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findOne({_id: taskId});
        if (!task) {
            return res.status(404).json({msg: "Cannot find task with id: " + taskId});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error});
    }
}

const getTaskWithName = async (req, res) => {
    const {name: reqName} = req.params;
    try {
        const tasks = await Task.find({name: reqName});
        if (!tasks) {
            return res.status(404).json({msg: "Cannot find task with name: " + reqName});
        }
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({error});
    }
}

const updateTask = (req, res) => {
    res.send("Update task")
}

const deleteTask = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findOneAndDelete({_id: taskId});
        if (!task) {
            return res.status(404).json({msg: "Cannot find task with id: " + taskId});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask, getTaskWithName
}