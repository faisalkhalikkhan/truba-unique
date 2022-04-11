const mongoose = require('mongoose')

const newApplication = mongoose.Schema({
    name: String,
    enrollment: String,
    department: String,
    reasone: String,
    from: String,
    to: String,
    status: String,
    createdAt : {
        type: Date,
        default: new Date()
    }
})

const Application = mongoose.model("Application", newApplication);
module.exports = Application;