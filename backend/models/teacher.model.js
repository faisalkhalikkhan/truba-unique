const mongoose = require('mongoose')

const teacherDetails = mongoose.Schema({
    teacherId: String,
    name:String,
    picture:String,
    email:String,
    address:String,
    phone:String,
    alternativePhone:String,
    subjects: [],
    documents:[],   
    lastUpdate : {
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("teacherDetails",teacherDetails)