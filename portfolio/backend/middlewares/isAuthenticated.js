// isAuthenticated.js

// Using session management (server-side authentication) to check if user is authenticated

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// "req.session.user" instance essentially checks if a specific user is logged in based on logic defined via authRoutes
// req.session is an object that stores user session data - to note if user is already logged in or not
// next() is a function that calls the next middleware/function in the stack - if user is authenticated, it will proceed to its next natural flow/function

module.exports = isAuthenticated; // Export as a modular variable
