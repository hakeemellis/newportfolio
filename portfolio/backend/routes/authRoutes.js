// routes/authRoutes.js

// Handles authentication and authorization of users on the backend (for admin access)

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes - to load them directly into app instance (server.js with app.use)
const bcrypt = require("bcrypt"); // bcrypt for password hashing - for security prior to storing in DB

// Import Modular Variables
const User = require("../models/userModel"); // Import User Model - will have the schema for users
const isAuthenticated = require("../middlewares/isAuthenticated"); // Middleware to check if user is authenticated
const saltRounds = 10; // Number of salt rounds for bcrypt hashing - for security prior to storing in DB

// -------- ROUTES DEFINED BELOW ------------ //

// Login route (async due to DB operations)
router.post("/login", async (req, res) => {
  try {
    // Check if credentials are valid alongside username and password from input fields
    const { username, password } = req.body; // Extract username and password from request body - from the client-side
    const user = await User.findOne({ username }); // Retrieve user by username only from DB - for security

    // Check if password matches - if user exists and password is correct
    if (user && (await bcrypt.compare(password, user.password))) {
      // Basically, if the user exists and the password matches the hashed password in the DB
      req.session.user = user; // Store the user as authenticated due to active session
      res.json({ success: true }); // Send a success response
    } else {
      res.json({ success: false }); // Send a failure response
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// End of login route

// Logout route (callback - no need for async)
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    // Assign error to parameter if failed to destroy the session
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" }); // Send a failure response
    }
    // If session destroyed successfully
    else {
      res.json({ success: true }); // Send a success response
    }
  });
});
// End of logout route

// Update admin credentials route
router.post("/update-credentials", isAuthenticated, async (req, res) => {
  // Define variables to update admin credentials
  const { newUsername, newPassword } = req.body; // Extract new username and password from request body
  try {
    // Find the user by ID in MongoDB
    const user = await User.findById(req.session.user._id); // Find the user by ID in MongoDB (due to already being authenticated)

    // Check if user exists and update their credentials
    if (user) {
      user.username = newUsername; // ("username" is an instance of the User model - as defined through defining user)
      user.password = await bcrypt.hash(newPassword, saltRounds); // Hash the new password before storing it
      await user.save(); // Save the updated user credentials to MongoDB
      res.json({ success: true, message: "Credentials updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating credentials", error });
  }
});
// End of update admin credentials route

// Authentication check route - to check if user is authenticated
router.get("/check-auth", (req, res) => {
  // Check if user is authenticated
  if (req.session && req.session.user) {
    // Checks in express server if "express-session" (defined in server.js) exists where user authenticated successfully
    // or if user is already logged in
    res.json({ authenticated: true, user: req.session.user }); // made up param in authenticated that if true, will verify that user is authenticated
  } else {
    res.json({ authenticated: false, message: "Not authenticated" }); // made up param in authenticated that if false, will verify that user is not authenticated
  }
});
// End of authentication check route

module.exports = router; // Export all defined routes to express router/server instance
