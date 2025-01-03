// routes/projectRoutes.js

const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Route for fetching all projects
router.get("/", projectController.getAllProjects);

// Route for adding a new project
router.post("/", projectController.addProject);

// Route for deleting a project by ID
router.delete("/:id", projectController.deleteProject);

module.exports = router;
