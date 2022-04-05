const mongoose = require("mongoose");

const newUser = mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: [true, "Username required."],
    index:true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password required."],
  },
  role: String,
  adminId: String,
  picture : Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  statusAuth: Boolean,
});

const User = mongoose.model("User", newUser);
User.createIndexes();
module.exports = User;
