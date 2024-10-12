const Task = require('../models/Task');
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        handleError(res, 500, next);
    }
}

const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        handleError(res, 500, next);
    }
}
 
const getTask = async (req, res, next) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findOne({_id: taskId});
        if (!task) {
            handleError(res, 404, next);
        }
        res.status(200).json({task});
    } catch (error) {
        handleError(res, 500, next);
    }
}

const getTaskWithName = async (req, res) => {
    const {name: reqName} = req.params;
    try {
        const tasks = await Task.find({name: reqName});
        if (!tasks) {
            handleError(res, 404, next);
        }
        res.status(200).json({tasks});
    } catch (error) {
        handleError(res, 500, next);
    }
}

const updateTask = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findByIdAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            handleError(res, 404, next);
        }
        res.status(200).json({task});
    } catch (error) {
        handleError(res, 500, next);
    }
}

const deleteTask = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findOneAndDelete({_id: taskId});
        if (!task) {
            handleError(res, 404, next);
        }
        res.status(200).json({task});
    } catch (error) {
        handleError(res, 500, next);
    }
}

const handleError = (res, status, next) => {
    console.log("handleError called");
    res.isError = true;
    res.errorStatus = status;
    next();
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask, getTaskWithName
}