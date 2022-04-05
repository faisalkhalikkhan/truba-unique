const mongoose = require('mongoose')

const newAdmin = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    photo: String,
    createdAt : {
        type: Date,
        default: new Date()
    }
})

const Admin = mongoose.model("Admin", newAdmin);
module.exports = Admin;