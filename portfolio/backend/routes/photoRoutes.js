// routes/photoRoutes.js

// Handles fetching, storing and returning photos from Cloudinary

// Import Express Modules for APIs
const express = require("express");

// Import Modular Variables
const Photo = require("../models/photoModel"); // Imported to handle photo schema
const fetchCloudinaryPhotos = require("../utils/cloudinary"); // Function to fetch Cloudinary photos

// Initialize Router
const router = express.Router(); // using the express router (instance of express)

// Fetch all photos
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos); // Send the fetched photos as a JSON response - noted as "/photos"
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

// Function to use Webhook to sync photos automatically

/*Due to referencing "Photo" and the model was fetched earlier, my route now
becomes "/photos/webhook" */
router.post("/webhook", async (req, res) => {
  try {
    const cloudinaryPhotos = await fetchCloudinaryPhotos();

    // Sync database
    await Photo.deleteMany();
    await Photo.insertMany(cloudinaryPhotos);

    // Notify WebSocket clients
    req.io.emit("photos-updated"); // Works due to Websocket being initialized in server.js

    res.status(200).json({ message: "Photos synced successfully!" });
  } catch (error) {
    console.error("Error syncing photos:", error);
    res.status(500).json({ error: "Failed to sync photos" });
  }
});

module.exports = router; // Export for use
