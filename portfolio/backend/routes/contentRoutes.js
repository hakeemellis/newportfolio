// routes/contentRoutes.js

// Handles updating content on the backend

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes

// Import Modular Variables
const Content = require("../models/contentModel"); // Import Content Model Schema
const isAuthenticated = require("../middlewares/isAuthenticated"); // Middleware to check if user is authenticated

// -------- ROUTES DEFINED BELOW ------------ //

// Update content route
router.post("/:section", isAuthenticated, async (req, res) => {
  //"/:section" is a dynamic route parameter

  // Extract section and content from request body
  const { section } = req.params; // Extract section from request params - defined with curly braces due to its dynamic nature
  const { content } = req.body; // Extract content from request body - defined with curly braces due to its dynamic nature
  try {
    // Filter and Update Relevant Content - using FindOneAndUpdate method from MongoDB
    const result = await Content.findOneAndUpdate(
      { section },
      { content },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ); // "upsert" eliminates the need to check if the content already exists
    // and updates it if it does, or creates it if it doesn't, which eliminates the need to seed data - short for insert or update
    res.json({ success: true, result }); // if successful, shows content in a JSON format
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// End of update content route

// Fetch content route
router.get("/:section", async (req, res) => {
  // Extract section from request params
  const { section } = req.params; // Extract section from request params - defined with curly braces due to its dynamic nature
  try {
    // Fetch content by section
    const content = await Content.findOne({ section }); // Find content by section using "findOne" method from MongoDB

    // Check if content exists
    if (content) {
      res.json({ success: true, content: content.content }); // if successful, shows content in a JSON format "content.content" due to content (the array) being nested
    } else {
      res.status(404).json({ success: false, message: "Content not found" }); // if content not found, shows failure - but only because it's empty
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" }); // shows failure due to internal server error (not defined in contentModel.js)
  }
});
// End of fetch content route

// console.log("Content routes loaded SUCCESSFULLY"); - only keeping because it was hell to get this route working | debugging purposes

module.exports = router; // Export all defined routes to express router/server instance
