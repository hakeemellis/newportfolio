// routes/photoRoutes.js

// Handles fetching, storing and returning photos from Cloudinary

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes

// Import Modular Variables
const Photo = require("../models/photoModel"); // Import Photo Model Schema - will have the schema for photos
const fetchCloudinaryPhotos = require("../utils/cloudinary"); // Function to fetch Cloudinary photos

// Fetch all photos to root route
router.get("/", async (req, res) => {
  try {
    // Fetch photos from MongoDB
    const photos = await Photo.find(); // Fetch all photos from MongoDB - as assigned through photo model with "Photo" using the "find" array method
    res.json(photos); // Return assigned variable in "photos" as JSON data
  } catch (error) {
    console.log("Syncing photos...");
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});
// End of fetch all photos route

// Sync photos automatically through Webhook route (currely not in use - route is active though)
router.post("/webhook", async (req, res) => {
  try {
    // Define variable for fetching photos from Cloudinary
    const cloudinaryPhotos = await fetchCloudinaryPhotos(); // Fetch photos from Cloudinary

    // Sync database
    await Photo.deleteMany(); // Delete all photos from MongoDB
    await Photo.insertMany(cloudinaryPhotos); // Insert fetched photos into MongoDB

    // Notify WebSocket clients - to broadcast the update that photos have been updated (like IG stories)
    // req.io.emit("photos-updated"); // not in use right now

    // Success message
    res.status(200).json({ message: "Photos synced successfully!" });
    console.log("Photos synced successfully!");
  } catch (error) {
    console.error("Error syncing photos:", error);
    console.log("Error syncing photos:", error);
    res.status(500).json({ error: "Failed to sync photos" });
  }
});
// End of sync photos route

console.log("Photo routes loaded SUCCESSFULLY"); // only keeping because it was hell to get this route working too | debugging purposes

module.exports = router; // Export all defined routes to express router/server instance
