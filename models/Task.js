const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provided a name"],
        trim: true,
        maxlength: [20, "name must be <= 20 chars"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// If we pass something extra like an extra key value, it will not be stored in the db. Mongoose will take care of it.
// But we forget to pass value for some params, then it will stored as it is. To tackle this, we have used the validation feature of mongoose.
module.exports = mongoose.model('Task', TaskSchema);