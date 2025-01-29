// seeds/adminSeeder.js
// Script to seed the database with an initial admin user

// IMPORT MODULES

// Import Application Modules
const mongoose = require("mongoose"); // Import mongoose
const bcrypt = require("bcrypt"); // bcrypt for password hashing - for security prior to storing in DB
const dotenv = require("dotenv"); // Import dotenv for environment variables - to hide sensitive information

// Import Modular Variables
const User = require("../models/userModel"); // Import the User model - will have the schema for users
const connectDB = require("../config/db"); // Import the MongoDB connection
const saltRounds = 10; // Number of salt rounds for bcrypt hashing - for security prior to storing in DB

// CONFIGURE ENVIRONMENT VARIABLES
dotenv.config(); // Configure environment variables

// FUNCTION TO SEED TO DATABASE
const seedAdminUser = async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database Connected!");

    // Clear existing users to avoid duplicates
    await User.deleteMany();
    console.log("Users Deleted!");

    // Hash the admin password
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      saltRounds
    ); // only placed in the function due to bcrypt being async

    // Create New Admin User
    const adminUser = new User({
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword, 
    });

    // Insert the admin user into MongoDB
    await adminUser.save();
    console.log("Admin user seeded successfully!");
    process.exit(0); // Exit the process after seeding successfully
  } catch (error) {
    console.error("Error seeding admin user:", error);
    process.exit(1); // Exit the process if there's an error
  }
};

// Run the seed function
seedAdminUser();
