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
const http = require("http"); // http for handling WebSockets

// Import Modular Variables: Database and Routes
const connectDB = require("./config/db"); // to establish connection to MongoDB
const photoRoutes = require("./routes/photoRoutes"); // for use in app.use, as defined in ROUTES
const initializeWebSocket = require("./config/websocket"); // for use in app.use, as defined in ROUTES
const app = express(); // defining the variable "app" to allow express to establish routing
const server = http.createServer(app); // defining the variable "server" to allow express to establish WebSockets
const io = initializeWebSocket(server); // defining the variable "io" to allow express to establish WebSockets

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

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN, // Use the CORS origin from the environment variables
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// ROUTES
app.use("/api/photos", photoRoutes); // Syntax: app.use(path - can be anything we want, route/middleware); - just for loading route

// Default route for health check or root
app.get("/", (req, res) => {
  res.send("API is running...");
});

// START SERVER
const PORT = process.env.PORT || 5001; // Reads environment variable for PORT or default to 5001
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if (io) {
    console.log("WebSocket server initialized successfully");
  } else {
    console.error("WebSocket server failed to initialize");
  }
});
