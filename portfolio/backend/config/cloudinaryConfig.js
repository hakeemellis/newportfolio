//config/cloudinaryConfig.js

// Logic for connecting to Cloudinary

// Required Import
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv"); // Import dotenv for environment variables - to hide sensitive information

// Configuration for dotenv | Environment for it modified based on the .env file
dotenv.config();

// Configuration for Cloudinary | Environment for it modified based on the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary; // Export as a module
