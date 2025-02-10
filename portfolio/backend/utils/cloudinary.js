// utils/cloudinary.js

// Handles fetching media files from Cloudinary

// Import the Cloudinary Module for API Calls
const cloudinary = require("../config/cloudinaryConfig");

// Function to fetch photos from Cloudinary
const fetchCloudinaryPhotos = async () => {
  try {
    // Fetch photos from Cloudinary
    const result = await cloudinary.api.resources({
      type: "upload",
      resource_type: "image",
      max_results: 500, // Fetch up to 500 photos at once
    });

    // Map each fetched photo to follow the desired format - similar to photo model schema
    const photos = result.resources.map((photo) => ({
      name: photo.public_id.split("/").pop(), // "/" is used to split the public_id and pop() to get the last part
      description: "Fetched from Cloudinary", // the photo description
      photoURL: photo.secure_url, //the secure URL
      createdAt: new Date(photo.created_at), // the created_at timestamp - added, not part of cloudinary (but is in my photo model schema)
      publicId: photo.public_id, //the public_id (unique identifier - like asset_id without the gibberish)
    }));
    // End of map

    // Return the mapped photos
    return photos;
  } catch (error) {
    return []; // Return null if there's an error
  }
};
// End of fetching photos from Cloudinary

module.exports = fetchCloudinaryPhotos; // Export as a modular variable
