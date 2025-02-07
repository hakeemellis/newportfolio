// routes/openaiRoutes.js

// Handles OpenAI API calls for generating tags based on descriptions

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes

// Import Modular Variables
const openAIChatModel = require("../utils/openaiChatModel"); // Import OpenAI Chat Model to assist with generating tags

// Configure Environment Variables
require("dotenv").config();

// -------- ROUTES DEFINED BELOW ------------ //

// Generate tags for description route
router.post("/generate-tags", async (req, res) => {
  // Extract description from request body
  const { description } = req.body; // Extract description from request body - defined with curly braces due to its dynamic nature
  try {
    // Generate tags using OpenAI Chat Model based on description parameter
    const tags = await openAIChatModel(description); // Call OpenAI Chat Model to generate tags
    res.json({ tags }); // send tags in JSON format - curly braces in this case just to show it's from "tags" in JSON format
  } catch (error) {
    console.error("Error generating tags:", error);
    res.status(500).json({ error: "Failed to generate tags" });
  }
});
// End of generate tags route

module.exports = router; // Export all defined routes to express router/server instance
