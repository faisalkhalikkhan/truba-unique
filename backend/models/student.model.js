const mongoose = require('mongoose')
const studentDetails = mongoose.Schema({
    studentId: String,
    picture:String,
    email:String,
    address:String,
    phone:String,
    alternativePhone:String,
    teachers:[],
    documents:[],
    lastUpdate : {
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("studentDetails",studentDetails)