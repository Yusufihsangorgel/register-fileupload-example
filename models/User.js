const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    image : {type: Buffer, require: false , default : null},
    date: {type: Date, default: Date.now}
})

module.exports =  mongoose.model('Users', userSchema);