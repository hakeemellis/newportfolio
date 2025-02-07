// models/photoModel.js

// Establish photo's schema markup for MongoDB to store photo data

// Required Import
const mongoose = require("mongoose");

// Schema for photos
const photoSchema = new mongoose.Schema(
  {
    // Document Structure and/or Fields
    name: { type: String, required: true }, // To accommodate data for one section - stores in the backend as a string
    description: { type: String, required: true },
    photoURL: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, // Same as string, but to store date and time - with Date.now being import to store the current date and time to not define date field as undefined
    publicId: { type: String, required: true, unique: true }, // Accommodates only one value, unique to the field and is required to not index any value that is empty
  },
  {
    // Options to Apply to Schema Globally
    timestamps: true, // To store createdAt and updatedAt fields in the database - but if createdAt is defined with Date.now, it will store the current date and time
    // and not the default date and time i.e. updatedAt field will not be stored
  }
);

Photo = mongoose.model("Photo", photoSchema); // to define the model as a variable

module.exports = Photo; // Export as a modular variable
