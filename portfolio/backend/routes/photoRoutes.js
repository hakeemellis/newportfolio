// routes/photoRoutes.js

// Handles fetching, storing and returning photos from Cloudinary

// Import Express Modules for APIs
const express = require("express");

// Import Modular Variables
const fetchSpecificImage = require("../utils/cloudinary"); // Function to fetch/call specific image
const Photo = require("../models/photoModel"); // Imported to handle photo schema

// Initialize Router
const router = express.Router(); // using the express router (instance of express)

// Route for fetching a specific image
router.get("photo/:publicId", async (req, res) => {
  // Defining publicId to be fetched
  const { publicId } = req.params; // for the code to request and retrieve the parameters from the variable (in this case a URL)

  try {
    // Check if the publicId exists in the database schema
    let imageData = await Photo.findOne({ publicId });

    if (!imageData) {
      // If publicId doesn't exist in MongoDB for this image, fetch it from Cloudinary
      imageData = await fetchSpecificImage(publicId); // fetches full URL and path due to function

      // Save the metadata to the database - pulled from Cloudinary
      const newPhoto = new Photo({
        // used "new" to create a revised instance of the imported Photo model
        title: imageData.title,
        photoURL: imageData.photo,
        createdAt: imageData.createdAt,
        publicId: publicId,
      });

      await newPhoto.save(); // Save the metadata to the database
    }

    return res.status(200).json(imageData); // Sends data in a JSON format to the client/frontend if successful
    // While displaying its okay with the 200 status code
  } catch (error) {
    // Error handling
    console.error("Error fetching specific image:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  } // Sends Internal Server Error (500)
});

module.exports = router; // Export for use
