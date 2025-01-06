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
    Description: "This is a mock photo",
    photo: "https://mockdata.com/photo1.jpg",
    createdAt: new Date(),
  },
];

// FUNCTION TO SEED TO DATABASE

const seedPhotos = async () => {
  // to try to seed the database
  try {
    // Connect to the database
    await connectDB();
    console.log("Database Connected!");

    // Delete any existing photos - due to not wanting duplicates
    await Photo.deleteMany();
    console.log("Photos Deleted!");

    // Insert Photos - using the mock data
    await Photo.insertMany(seedImageSchema);
    console.log("Data Imported!");
    process.exit(); // Exit the process after seeding successfully
  } catch (error) {
    // to catch errors
    console.error("error seeding photos:", error);
    process.exit(1); // Exit the process after seeding unsuccessfully
  }
};

module.exports = seedPhotos; // Export as a module
