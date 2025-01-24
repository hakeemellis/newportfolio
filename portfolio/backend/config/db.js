// config/db.js

// Logic for connecting to MongoDB (using Mongoose)

// Required Import
const mongoose = require("mongoose"); // Import Mongoose for MongoDB

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Cluster51448",
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB; // Export as a module
