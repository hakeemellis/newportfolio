// isAuthenticated.js

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) { 
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}; 

// "req.session.user" instance essentially checks if the user is logged in based on logic defined via authRoutes

module.exports = isAuthenticated; // Export as a module