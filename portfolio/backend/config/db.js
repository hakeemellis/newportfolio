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

    // Log success
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Exit the process if there's an error
    process.exit(1);
  }
};

module.exports = connectDB; // Export as a modular variable
