const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    account_name: {
        type: String,
        required: [true, "Must provide an account name"],
        unique: [true, "Account name already exists"],
        trim: true,
        maxlength: [20, "Account name must be <= 20 chars"]
    },
    user_name: {
        type: String,
        required: [true, "Must provide a user name"],
        trim: true,
        maxlength: [20, "Account name must be <= 20 chars"]
    },
    password: {
        type: String,
        required: [true, "Must provide a password"],
        trim: true,
        maxlength: [30, "Account name must be <= 30 chars"]
    }
})

// If we pass something extra like an extra key value, it will not be stored in the db. Mongoose will take care of it.
// But we forget to pass value for some params, then it will stored as it is. To tackle this, we have used the validation feature of mongoose.
module.exports = mongoose.model('Task', TaskSchema);