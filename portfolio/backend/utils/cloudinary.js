// Initialize Cloudinary

// Handles fetching media files from Cloudinary

// Import the Cloudinary Module for API Calls
const cloudinary = require("../config/cloudinaryConfig");

const fetchCloudinaryPhotos = async () => {
  try {
    // Fetch resources (photos) from Cloudinary
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 500, // Fetch up to 500 photos at once (adjust as needed)
    });

    // Map the fetched photos to the desired format
    const photos = result.resources.map((photo) => ({
      name: photo.public_id.split("/").pop(), // Extract the name from the public_id
      description: "Fetched from Cloudinary", // Add a description
      photoURL: photo.secure_url, // Use the secure URL
      createdAt: new Date(photo.created_at), // Use the created_at timestamp
      publicId: photo.public_id, // Use the public_id
    }));

    return photos;
  } catch (error) {
    console.error("Error fetching photos from Cloudinary:", error);
    return [];
  }
};

module.exports = fetchCloudinaryPhotos;