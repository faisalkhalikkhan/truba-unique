const mongoose = require('mongoose')
const studentDetails = mongoose.Schema({
    studentId: String,
    picture: Number,
    email: String,
    address: String,
    phone: String,
    alternativePhone: String,
    batch: String,
    semester: String,
    department: String,
    teachers: [],
    documents: [],
    education: [],
    lastUpdate: {
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("studentDetails", studentDetails)