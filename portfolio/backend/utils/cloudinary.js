// Initialize Cloudinary

// Handles fetching media files from Cloudinary

// Import the Cloudinary Module for API Calls
const cloudinary = require("../config/cloudinaryConfig");

// Function to fetch photos from Cloudinary
const fetchCloudinaryPhotos = async () => {
  try {
    // Fetch resources (photos) from Cloudinary
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 500, // Fetch up to 500 photos at once 
    });

    // Map the fetched photos to the desired format
    const photos = result.resources.map((photo) => ({
      name: photo.public_id.split("/").pop(), // Use the public_id as the name
      description: "Fetched from Cloudinary", // the photo description
      photoURL: photo.secure_url, //the secure URL
      createdAt: new Date(photo.created_at), // the created_at timestamp
      publicId: photo.public_id, //the public_id
    }));

    return photos; // Return the mapped photos
  } catch (error) {
    console.error("Error fetching photos from Cloudinary:", error);
    return [];
  }
};

module.exports = fetchCloudinaryPhotos; // Export as a module