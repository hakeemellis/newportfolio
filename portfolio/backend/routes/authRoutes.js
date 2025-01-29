// routes/authRoutes.js

// Handles authentication and authorization of users on the backend (for admin access)

// Import Application Modules
const express = require("express"); // express for handling HTTP requests (allows me to use routes and middleware due being defined in server.js)
const router = express.Router(); // using the express router to define routes
const bcrypt = require("bcrypt"); // bcrypt for password hashing - for security prior to storing in DB

// Import Modular Variables
const User = require("../models/userModel"); // Import User Model - will have the schema for users
const isAuthenticated = require("../middlewares/isAuthenticated"); // Middleware to check if user is authenticated
const saltRounds = 10; // Number of salt rounds for bcrypt hashing - for security prior to storing in DB

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body; // Extract username and password from request body
    const user = await User.findOne({ username }); // Retrieve user by username only from DB - for security
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user; // Store the user in the session
      res.json({ success: true }); // Send a success response
    } else {
      res.json({ success: false }); // Send a failure response
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Logout route
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during logout:", err);
      res.status(500).json({ success: false, message: "Internal server error" }); // Send a failure response
    } else {
      res.json({ success: true }); // Send a success response
    }
  });
});

// Update admin credentials route
router.post("/update-credentials", isAuthenticated, async (req, res) => {
  const { newUsername, newPassword } = req.body; // Extract new username and password from request body
  try {
    const user = await User.findById(req.session.user._id); // Find the user by ID (due to already being authenticated)
    if (user) {
      user.username = newUsername;
      user.password = await bcrypt.hash(newPassword, saltRounds); // Hash the new password before storing it
      await user.save();
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

module.exports = router; // Exports all defined routes
