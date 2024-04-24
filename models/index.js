const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    time: {
        hour: { type: Number},
        minute: { type: Number},
        second: { type: Number}
    }
})

const User = mongoose.model('User', userSchema, 'users')

module.exports = User;