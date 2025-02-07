//config/cloudinaryConfig.js

// Logic for connecting to Cloudinary

// Required Application Modules
const cloudinary = require("cloudinary").v2; // Import cloudinary for image storage

// Required Modular Variables
const dotenv = require("dotenv"); // Import dotenv for environment variables - to hide sensitive information

// Configure Environment Variables
dotenv.config(); // Configuration for dotenv | Environment for it modified based on the .env file

// Configuration for Cloudinary | Environment for it modified based on the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary; // Export as a modular variable
