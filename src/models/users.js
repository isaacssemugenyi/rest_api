const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const User = model('User', UserSchema)
module.exports = User;