// models/Project.js

// Establish project's schema markup for MongoDB to store project data

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String], // [ ] Searches for an Array of technology names
  githubLink: { type: String },
  liveDemoLink: { type: String },
  image: { type: String }, // { }Searches for a specific link to display image
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
