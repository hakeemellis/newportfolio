// models/userModel.js

// Establish user's schema markup for MongoDB to store user data

// Required Import
const mongoose = require("mongoose");

// Schema to store users
const userSchema = new mongoose.Schema({
  // Document Structure and/or Fields
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema); // to define the model as a variable

module.exports = User; // Export as a module
