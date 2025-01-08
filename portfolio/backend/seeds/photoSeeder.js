// seeds/photoSeeder.js
// Script to seed the database with schema setup for photos

// IMPORT MODULES

// Modular Imports
const mongoose = require("mongoose"); // Import mongoose
const connectDB = require("../config/db"); // Import the MongoDB connection

// Variable Imports
const Photo = require("../models/photoModel"); // Import the Photo model - will have the schema for photos
const dotenv = require("dotenv"); // Import dotenv for environment variables - to hide sensitive information

// CONFIGURE ENVIRONMENT VARIABLES

dotenv.config(); // Configure environment variables

// DEFINING THE MOCK SEED DATA

const seedImageSchema = [
  {
    name: "Photo 1",
    description: "This is a mock photo",
    photoURL: "https://mockdata.com/photo1.jpg", // Mock photo URL
    createdAt: new Date(),
    publicId: "mock-photo-1", // Mock publicId for Cloudinary
  },
  {
    name: "Photo 2",
    description: "Another mock photo",
    photoURL: "https://mockdata.com/photo2.jpg",
    createdAt: new Date(),
    publicId: "mock-photo-2",
  },
];

// Fetch Cloudinary URL based on publicId
const fetchCloudinaryUrl = async (publicId) => {
  try {
    const result = await fetchSpecificImage(publicId); // This function should fetch the Cloudinary data by publicId
    return result; // Return the Cloudinary data with the URL and other metadata
  } catch (error) {
    console.error("Error fetching image from Cloudinary:", error);
    return null;
  }
};

// FUNCTION TO SEED TO DATABASE
const seedPhotos = async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database Connected!");

    // Clear existing photos to avoid duplicates
    await Photo.deleteMany();
    console.log("Photos Deleted!");

    // Loop through mock seed data and fetch the real Cloudinary URLs
    for (let i = 0; i < seedImageSchema.length; i++) {
      const seedData = seedImageSchema[i];
      const cloudinaryData = await fetchCloudinaryUrl(seedData.publicId); // Fetch real data from Cloudinary

      if (cloudinaryData) {
        // Create a new photo document with actual data
        const newPhoto = new Photo({
          name: seedData.name,
          description: seedData.description,
          photoURL: cloudinaryData.secure_url, // Use the real Cloudinary URL
          createdAt: seedData.createdAt,
          publicId: seedData.publicId, // Use the mock publicId
        });

        // Save the new photo to the database
        await newPhoto.save();
        console.log(`Photo ${seedData.name} saved with real Cloudinary URL.`);
      } else {
        console.log(`Cloudinary data not found for ${seedData.name}.`);
      }
    }

    console.log("Data Imported!");
    process.exit(); // Exit the process after seeding
  } catch (error) {
    console.error("Error seeding photos:", error);
    process.exit(1); // Exit the process if there's an error
  }
};

seedPhotos(); // Call the function to seed the database

module.exports = seedPhotos; // Export as a module
