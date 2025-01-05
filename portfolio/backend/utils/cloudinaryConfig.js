// Initialize Cloudinary

// Handles fetching media files from Cloudinary

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
fetchSpecificImage('projects/my-specific-image'); // Replace with the full public ID