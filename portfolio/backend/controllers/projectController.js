// controllers/projectController.js

/* Logic for project-related operations 
(the business logic for the routes to essentially know what to do) */

const Project = require("../models/Project");

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
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProjects, addProject, deleteProject };
