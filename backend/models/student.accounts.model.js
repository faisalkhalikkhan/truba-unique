const mongoose = require('mongoose')
const newStudentAccounts = mongoose.Schema({
    studentId: String,
    totalFees: Number,
    paidAmount: Number,
    libraryFine: Number,
    otherFine: Number,
    conditionOfAdmission: String
})

const StudentAccounts = mongoose.model("StudentAccounts", newStudentAccounts);
module.exports = StudentAccounts;