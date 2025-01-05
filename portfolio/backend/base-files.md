// config/service.js or db.js
// Handles service setups like databases, APIs, or external libraries.

const Service = require("service-library");

const configureService = async () => {
try {
await Service.connect(process.env.SERVICE_URI, {
option1: "value1",
option2: "value2",
});
console.log("Connected to Service");
} catch (err) {
console.error("Service connection error:", err);
process.exit(1);
}
};

module.exports = configureService;

// utils/fetchData.js
// Encapsulate reusable logic, focusing on one task per function.

const axios = require("axios");

const fetchData = async (url) => {
try {
const response = await axios.get(url);
return response.data; // Return the response data for further use
} catch (err) {
console.error("Error fetching data:", err);
throw new Error("Unable to fetch data");
}
};

module.exports = fetchData;

// models/User.js or Project.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

module.exports = Project;

// routes/projectRoutes.js or userRoutes.js
// Use Express (or other frameworks) to handle incoming requests.

const express = require("express");
const authenticate = require("../middleware/auth");
const { getUser, createUser } = require("../controllers/userController");

const router = express.Router();

router.get("/:id", authenticate, getUser); // Protected route
router.post("/", createUser); // Public route

module.exports = router;


// controllers/userController.js or projectController.js
// Implement logic for handling requests, separated from the routing layer.

const User = require("../models/User");

// Get a specific user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "Error creating user", error: err.message });
  }
};

module.exports = { getUser, createUser };

// middlewares/authMiddleware.js (optional)

// middleware/auth.js
//Add reusable request handlers for specific purposes (e.g., authentication, validation).

const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
const token = req.headers.authorization?.split(" ")[1];

if (!token) {
return res.status(401).json({ message: "Authentication token missing" });
}

try {
const user = jwt.verify(token, process.env.JWT_SECRET);
req.user = user; // Attach user data to the request object
next(); // Proceed to the next middleware or route handler
} catch (err) {
res.status(403).json({ message: "Invalid or expired token" });
}
};

module.exports = authenticate;

// utils/cloudinary.js (optional)

const cloudinary = require('cloudinary').v2;

cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath) => {
try {
const result = await cloudinary.uploader.upload(filePath, {
folder: 'projects', // Specify a folder in your Cloudinary
});
return result.secure_url; // Return the URL of the uploaded image
} catch (err) {
console.error(err);
}
};

module.exports = { uploadImage };

// .env

MONGO_URI=your_mongo_connection_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret (if needed)


// server.js or app.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // CORS for handling cross-origin requests (especially from frontend)

// Routes
app.use('/api/projects', projectRoutes); // Route for projects

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

// NOT REQUIRED BUT GOOD TO HAVE //

// seedProjects.js

const mongoose = require("mongoose");
const Project = require("../models/Project"); // Mongoose model for projects
const connectDB = require("../config/db"); // MongoDB connection

// Connect to the database
connectDB();

// Seed data to populate
const projects = [
{
title: "SuiteHaven",
description: "This is a project created in React",
tags: ["React", "API"],
photo: "https://example.com/photo.jpg",
link: "https://example.com/demo"
},
{
title: "Project Two",
description: "A project using Vue.js",
tags: ["Vue", "Design"],
photo: "https://example.com/photo2.jpg",
link: "https://example.com/demo2"
}
];

// Function to seed the database
const seedProjects = async () => {
try {
// Delete any existing projects
await Project.deleteMany();

    // Insert the seed projects
    await Project.insertMany(projects);

    console.log("Database seeded successfully!");
    mongoose.connection.close();

} catch (error) {
console.error("Error seeding database:", error);
mongoose.connection.close();
}
};

seedProjects();

Use: node scripts/seedProjects.js - to run script (and populate the database with the information as per the schema - as a manual upload so we can continuously pull from it as per needed)


// config/cloudinary.js

const cloudinary = require('cloudinary').v2;

// Initialize Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
