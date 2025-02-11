// config/db.js

// Logic for connecting to MongoDB (using Mongoose)

// Required Import
const mongoose = require("mongoose"); // Import Mongoose for MongoDB

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });

    // Log success - Debugging for Render
    console.log("Connected to MongoDB");
  } catch (err) {
    // Log error - Debugging for Render
    console.log(err);
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }
};

module.exports = connectDB; // Export as a modular variable
