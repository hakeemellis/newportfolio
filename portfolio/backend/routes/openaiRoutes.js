// routes/openaiRoutes.js

// Handles OpenAI API calls for generating tags based on descriptions

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes

// Import Modular Variables
const {
  openAIChatModel,
  openAIChatModelForSectors,
} = require("../utils/openaiChatModel"); // Import OpenAI Chat Model to assist with generating tags
const SectorTags = require("../models/sectorTagsModel");

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
    res.status(500).json({ error: "Failed to generate tags" });
  }
});
// End of generate tags route

router.post("/generate-sector-tags", async (req, res) => {
  console.log("BODY REQUEST", req.body);
  const { description } = req.body;

  // Ensure the description is not empty
  if (!description || description.trim().length === 0) {
    console.error("No valid description found for AI processing.");
    return res.status(400).json({ error: "No valid description provided" });
  }

  try {
    console.log("Sending to OpenAI:", description);
    const sectorTags = await openAIChatModelForSectors(description);
    console.log("Received from OpenAI:", sectorTags);

    // Ensure at least one tag is generated
    if (!sectorTags || sectorTags.length === 0) {
      console.error("OpenAI returned empty sector tags.");
      return res.status(500).json({ error: "Failed to generate sector tags" });
    }

    // Update the existing MongoDB document instead of creating a new one
    await SectorTags.findOneAndUpdate(
      {}, // Find any document
      { tags: sectorTags }, // Update the tags field
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({ sectorTags });
  } catch (error) {
    console.error("Error generating sector tags:", error);
    res.status(500).json({ error: "Failed to generate sector tags" });
  }
});

module.exports = router; // Export all defined routes to express router/server instance
