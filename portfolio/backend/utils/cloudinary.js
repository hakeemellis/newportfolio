// Initialize Cloudinary

// Handles fetching media files from Cloudinary

const cloudinary = require('../config/cloudinaryConfig');

const fetchSpecificImage = async (publicId) => {
  try {
    const result = await cloudinary.api.resource(publicId); // Fetch metadata for a single image
    console.log(result);
    return {
      title: publicId.split('/').pop(), // Extract title from public_id
      photo: result.secure_url,         // Cloudinary URL
      createdAt: result.created_at,
    };
  } catch (error) {
    console.error('Error fetching specific image:', error);
  }
};

// Usage:
module.exports = fetchSpecificImage;