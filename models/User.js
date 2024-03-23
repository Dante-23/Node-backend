const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Must provided a username"],
        trim: true,
        maxlength: [20, "username must be <= 20 chars"]
    },
    password: {
        type: String,
        required: [true, "Must provided a password"],
        maxlength: [20, "password must be <= 20 chars"]
    }
})

// If we pass something extra like an extra key value, it will not be stored in the db. Mongoose will take care of it.
// But we forget to pass value for some params, then it will stored as it is. To tackle this, we have used the validation feature of mongoose.
module.exports = mongoose.model('User', UserSchema);