// server.js

//The app.js of backend - will be the main entry point

/* Connects the backend to the frontend through:
1. Express server
2. MongoDB database using Mongoose
3. Cloudinary for image storage
4. CORS for handling cross-origin requests
5. Routes for handling API requests */

// Import Application Modules Required for Server to Run
const express = require("express"); // express for handling HTTP requests
const dotenv = require("dotenv"); // dotenv for environment variables
const cors = require("cors"); // cors for handling cross-origin requests

// Import Modular Variables: Database and Routes
const connectDB = require("./config/db"); // to establish connection to MongoDB
const photoRoutes = require("./routes/photoRoutes"); // for use in app.use, as defined in ROUTES
const app = express(); // defining the variable "app" to allow express to establish routing

// Defining Environment Configuration
dotenv.config({
  path:
    process.env.NODE_ENV === "production" // Check if the environment is production
      ? ".env.production"
      : process.env.NODE_ENV === "staging" // Check if the environment is staging (live enivorment but developmental
      ? ".env.staging"
      : ".env", // Default to .env file for development
});

// Log Environment Variables
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MONGO_URI:", process.env.MONGO_URI);

// CONNECT TO MONGO-DB
connectDB();

// MIDDLEWARE
app.use(express.json()); // for parsing JSON data
app.use(cors()); // CORS for handling cross-origin requests (especially from frontend)

// ROUTES

// Route for photo routes
app.use("/api", photoRoutes); // Syntax: app.use(path - can be anything we want, route/middleware); - just for loading route

// START SERVER
const PORT = process.env.PORT || 5001; // Reads environment variable for PORT or default to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
