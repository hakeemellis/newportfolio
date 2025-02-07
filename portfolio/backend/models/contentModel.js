// models/contentModel.js

// Establish content's schema markup for MongoDB to store content data

// Required Import
const mongoose = require("mongoose");

// Schema for content
const contentSchema = new mongoose.Schema({
  // Document Structure and/or Fields
  section: {
    type: String, // To accommodate data for one section - stores in the backend as a string 
    required: true, // Makes our field required, to push MongoDB to not index any value that is empty
    unique: true, // Makes our field unique, to push MongoDB to not index more than one value for this area. 
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // to accommodate data for multiple sections - stores in the backend as an array
    required: true,
  }, // Due to no "unique" property, it will allow multiple values to be indexed under this field
});

const Content = mongoose.model("Content", contentSchema); // to define the model as a variable

module.exports = Content; // Export as a modular variable
