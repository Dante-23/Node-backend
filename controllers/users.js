const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const checkIfUserExists = async (user) => {
    try {
        const _user = await User.findOne(user);
        if (!_user) return false;
        else return true;
    } catch (error) {
        console.log(error);
    }
    return true;
}

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const exists = await checkIfUserExists(req.body);
        if (exists) {
            return res.status(200).json({msg: "User already exists"});
        }
        const user = await User.create(req.body);
        res.status(201).json({user});
    } catch (error) {
        console.log("Unable to add user");
        res.status(500).json({msg: error});
    }
}

module.exports = {
    getAllUsers, createUser
}