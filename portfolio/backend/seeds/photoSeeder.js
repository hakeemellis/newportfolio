// seeds/photoSeeder.js

// Script to seed the database with schema setup for photos

// IMPORT MODULES

// Modular Imports
const mongoose = require("mongoose"); // Import mongoose
const connectDB = require("../config/db"); // Import the MongoDB connection

// Variable Imports
const Photo = require("../models/photoModel"); // Import the Photo model - will have the schema for photos
const dotenv = require("dotenv"); // Import dotenv for environment variables - to hide sensitive information
const fetchCloudinaryPhotos = require("../utils/cloudinary"); // Function to fetch Cloudinary photos

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config(); // Configure environment variables

// FUNCTION TO SEED TO DATABASE
const seedPhotos = async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database Connected!");

    // Clear existing photos to avoid duplicates
    await Photo.deleteMany(); // Delete all photos from MongoDB - as defined by Photo model with "Photo"
    console.log("Photos Deleted!");

    // Fetch photos from Cloudinary
    const photos = await fetchCloudinaryPhotos();
    console.log("Fetched photos from Cloudinary:", photos);

    // Insert fetched photos into MongoDB
    await Photo.insertMany(photos); // used "insertMany" instead of "save" due to array versus string
    console.log("Database seeded successfully!");
    process.exit(0); // Exit the process after seeding successfully
  } catch (error) {
    console.error("Error seeding photos:", error);
    process.exit(1); // Exit the process if there's an error
  }
};
// End of seedPhotos function

// Run the seed function
seedPhotos();
