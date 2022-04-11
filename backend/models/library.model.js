const mongoose = require('mongoose')
const newLib = mongoose.Schema({
    name: String, 
    lastHand: String,
    author: String, 
    idle: Boolean,
})

const Library =  mongoose.model("Library", newLib); 
module.exports = Library;