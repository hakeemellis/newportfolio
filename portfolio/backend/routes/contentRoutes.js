// routes/contentRoutes.js

// Handles updating content on the backend

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes

// Import Modular Variables
const Content = require("../models/contentModel"); // Import Content Model Schema
const isAuthenticated = require("../middlewares/isAuthenticated"); // Middleware to check if user is authenticated

// Content update routes
router.post("/content/:section", isAuthenticated, async (req, res) => {
  const { section } = req.params; // Extract section from request params
  const { content } = req.body; // Extract content from request body
  // Filter and Update Relevant Content
  await Content.findOneAndUpdate({ section }, { content }, { upsert: true }); // "upsert" eliminates the need to check if the content already exists 
  // and updates it if it does, or creates it if it doesn't, which eliminates the need to seed data - short for insert or update
  res.json({ success: true });
});

module.exports = router; // Exports all defined routes
