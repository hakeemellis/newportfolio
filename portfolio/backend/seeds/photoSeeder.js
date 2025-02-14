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

    // Clear existing photos to avoid duplicates
    await Photo.deleteMany(); // Delete all photos from MongoDB - as defined by Photo model with "Photo"

    // Fetch photos from Cloudinary
    const photos = await fetchCloudinaryPhotos();

    // Insert fetched photos into MongoDB
    await Photo.insertMany(photos); // used "insertMany" instead of "save" due to array versus string

    process.exit(0); // Exit the process after seeding successfully
  } catch (error) {
    process.exit(1); // Exit the process if there's an error
  }
};
// End of seedPhotos function

// Run the seed function
seedPhotos();
