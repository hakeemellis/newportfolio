// seeds/contentSeeder.js

// Script to seed the database with schema setup for content

// Import Application Modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Modular Variables
const Content = require("../models/contentModel"); // Import Content Model Schema
const connectDB = require("../config/db"); // Import the MongoDB connection

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config(); // To select the environment variables based on the environment

// FUNCTION TO SEED TO DATABASE
const seedContent = async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database Connected!");

    // Clear existing content to avoid duplicates
    await Content.deleteMany(); // Delete all content from MongoDB - as defined by Content model with "Content"
    console.log("Existing content deleted!");

    // Predefined content - to seed into MongoDB (just copying user model structure)
    const contentData = [
      {
        section: "about",
        content: `Testing content goes here...`,
      },
      {
        section: "experience",
        content: `Experience content goes here...`,
      },
      {
        section: "projects",
        content: `Projects content goes here...`,
      },
    ];

    // Insert predefined content into MongoDB
    await Content.insertMany(contentData); // used "insertMany" instead of "save" due to array versus string
    console.log("Content seeded successfully!");
    process.exit(0); // Exit the process after seeding successfully
  } catch (error) {
    console.error("Error seeding content:", error);
    process.exit(1); // Exit the process if there's an error
  }
};
// End of seed function

// Run the seed function
seedContent();
