// Initialize Cloudinary

// Handles fetching media files from Cloudinary

// Import the Cloudinary Module for API Calls
const cloudinary = require('../config/cloudinaryConfig');

// Function to Fetch Metadata for a Specific Image
const fetchSpecificImage = async (publicId) => {
  try {
    const result = await cloudinary.api.resource(publicId); // Fetch metadata for a single image due to "resource" and not "resources"
    console.log(result);
    return {
      title: publicId.split('/').pop(), // Extract title from public_id while keeping the photo name from the URL structure
      photo: result.secure_url,         // Result variable contains FULL secure URL - versus publicID with just the folder structure
      createdAt: result.created_at,  // Extract createdAt timestamp
    };
  } catch (error) {
    console.error('Error fetching specific image:', error);
    return null;// Log any errors
  }
};

// Usage:
module.exports = fetchSpecificImage;