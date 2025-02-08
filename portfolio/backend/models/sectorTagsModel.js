// models/sectorTagsModel.js

// Establish content's schema markup for MongoDB to store AI generated tag data

// Required Import
const mongoose = require("mongoose");

// Schema for content
const sectorTagsSchema = new mongoose.Schema({
  // Document Structure and/or Fields
  tags: {
    type: mongoose.Schema.Types.Mixed, // To accommodate data for one section - stores in the backend as a string 
    required: true, // Makes our field required, to push MongoDB to not index any value that is empty
  },
});

const SectorTags = mongoose.model("SectorTags", sectorTagsSchema); // to define the model as a variable

module.exports = SectorTags; // Export as a modular variable
