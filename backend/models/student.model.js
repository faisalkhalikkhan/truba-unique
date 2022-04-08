const mongoose = require('mongoose')
const studentDetails = mongoose.Schema({
    studentId: String,
    picture: Number,
    email: String,
    address: String,
    phone: String,
    alternativePhone: String,
    teachers: [],
    documents: [],
    education: [],
    // {
    //     SchoolCollegeName: String,
    //     Course: String,
    //     Percentage: String,
    //     Duration: {
    //         StartDate: Date,
    //         EndDate: Date,
    //     }
    // }
    lastUpdate: {
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("studentDetails", studentDetails)