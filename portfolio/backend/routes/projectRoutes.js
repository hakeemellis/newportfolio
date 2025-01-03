// routes/projectRoutes.js

// Routes for handling project-related requests
/* Handles:
1. GET /projects - Fetches all projects
2. POST /projects - Adds a new project
3. DELETE /projects/:id - Deletes a project by ID
4. PUT /projects/:id - Updates a project by ID */

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
