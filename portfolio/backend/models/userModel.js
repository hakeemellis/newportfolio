// models/userModel.js

// Establish user's schema markup for MongoDB to store user data

// Required Import
const mongoose = require("mongoose");

// Schema to store users
const userSchema = new mongoose.Schema({
  // Document Structure and/or Fields
  username: {
    type: String, // To accommodate data for one section - stores in the backend as a string
    required: true, // Makes our field required, to push MongoDB to not index any value that is empty
    unique: true, // Makes our field unique, to push MongoDB to not index more than one value for this area.
  },
  password: {
    type: String, // To accommodate data for one section - stores in the backend as a string
    required: true, // Makes our field required, to push MongoDB to not index any value that is empty
  },
});

const User = mongoose.model("User", userSchema); // to define the model as a variable

module.exports = User; // Export as a modular variable
