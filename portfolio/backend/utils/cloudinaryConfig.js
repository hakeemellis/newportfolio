// Initialize Cloudinary

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "projects", // Specify a folder in your Cloudinary
    });
    return result.secure_url; // Return the URL of the uploaded image
  } catch (err) {
    console.error(err);
  }
};

module.exports = { uploadImage };
