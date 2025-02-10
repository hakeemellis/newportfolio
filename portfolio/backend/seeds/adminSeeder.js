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
dotenv.config(); // To select the environment variables based on the environment

// FUNCTION TO SEED TO DATABASE
const seedAdminUser = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing users to avoid duplicates
    await User.deleteMany();

    // Hash the admin password
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      saltRounds
    ); // Wanted to define beforehand, but placed code in the function due to bcrypt being async - can't allow it to execute until needed

    // Create New Admin User - as defined by User model schema
    const adminUser = new User({
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
    });

    // Insert the admin user into MongoDB
    await adminUser.save();

    process.exit(0); // Exit the process after seeding successfully
  } catch (error) {
    process.exit(1); // Exit the process if there's an error
  }
};
// End of seed function

// Run the seed function
seedAdminUser();
