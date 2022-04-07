const mongoose = require('mongoose')
const newStudentAccounts = mongoose.Schema({
    studentId: String,
    collegeTuitionFees: Number,
    collegeBusFees : Number,
    developmentFees :Number,
    miscellaneousFees : Number,
    totalFees: Number,
    paidAmount: Number,
    libraryFine: Number,
    otherFine: Number,
    conditionOfAdmission: String
})

const StudentAccounts = mongoose.model("StudentAccounts", newStudentAccounts);
module.exports = StudentAccounts;