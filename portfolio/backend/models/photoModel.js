// models/photoModel.js

// Establish photo's schema markup for MongoDB to store photo data

const mongoose = require("mongoose");

// Schema for photos
const photoSchema = new mongoose.Schema(
  {
    // Document Structure and/or Fields
    title: { type: String, required: true },
    photoURL: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    publicId: { type: String, required: true, unique: true }, // Unique publicId for each photo
  },
  {
    // Options to Apply to Schema Globally
    timestamps: true,
  }
);

Photo = mongoose.model("Photo", photoSchema); // to define the model as a variable

module.exports = Photo;
