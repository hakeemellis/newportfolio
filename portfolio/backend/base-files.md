// config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Cluster",
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;


// models/Project.js

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],
  mediaUrl: {
    type: String,   // Store media URL from Cloudinary or Firebase Storage
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;


// routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route for fetching all projects
router.get('/', projectController.getAllProjects);

// Route for adding a new project
router.post('/', projectController.addProject);

// Route for deleting a project by ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;



// controllers/projectController.js

const Project = require('../models/Project');

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new project
const addProject = async (req, res) => {
  const { title, description, tags, mediaUrl, link } = req.body;

  const newProject = new Project({
    title,
    description,
    tags,
    mediaUrl,
    link,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a project by ID
const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProjects, addProject, deleteProject };



// middlewares/authMiddleware.js (optional)

const authMiddleware = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = authMiddleware;



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
      folder: 'projects',  // Specify a folder in your Cloudinary
    });
    return result.secure_url;  // Return the URL of the uploaded image
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


// server.js

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
app.use(cors());  // CORS for handling cross-origin requests (especially from frontend)

// Routes
app.use('/api/projects', projectRoutes);  // Route for projects

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// NOT REQUIRED BUT GOOD TO HAVE //

// seedProjects.js

const mongoose = require("mongoose");
const Project = require("../models/Project"); // Mongoose model for projects
const connectDB = require("../config/db");    // MongoDB connection

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