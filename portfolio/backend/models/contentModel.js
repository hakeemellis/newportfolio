// models/contentModel.js

// Establish content's schema markup for MongoDB to store content data

// Required Import
const mongoose = require("mongoose");

// Schema for content
const contentSchema = new mongoose.Schema({
  // Document Structure and/or Fields
  section: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema); // to define the model as a variable

module.exports = Content; // Export as a module
