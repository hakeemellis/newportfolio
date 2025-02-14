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
// Defining Environment Configuration
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : process.env.NODE_ENV === "staging"
      ? ".env.staging"
      : ".env",
});


const cors = require("cors"); // cors for handling cross-origin requests
const http = require("http"); // http for handling WebSockets
const session = require("express-session"); // to assist with session management (for authentication and security) i.e. server-side security
const MongoStore = require("connect-mongo");

// Import Modular Variables: Database and Routes
const app = express(); // defining the variable "app" to allow express to establish routing
const connectDB = require("./config/db"); // to establish connection to MongoDB
const photoRoutes = require("./routes/photoRoutes"); // to define default routes for photos (app.use)
const initializeWebSocket = require("./config/websocket"); // to import WebSocket configuration
const server = http.createServer(app); // defining the variable "server" to allow express to establish WebSockets
const io = initializeWebSocket(server); // defining the variable "io" to allow express to establish WebSockets
const authRoutes = require("./routes/authRoutes"); // to define default routes for authentication (app.use)
const contentRoutes = require("./routes/contentRoutes"); // to define default routes for content (app.use)
const openaiRoutes = require("./routes/openaiRoutes"); // to define default routes for AI use (app.use)



// CONNECT TO MONGO-DB
connectDB();

// MIDDLEWARE
app.use(express.json()); // for parsing JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // Prevents unnecessary session updates in database - for performance eg. if user logged in and clicked to upload a photo, it will create data for the session - even if user does not upload a thing
    saveUninitialized: false, // Prevents unneccessary sessions from being stored to database - for performance eg. if true, and user only visits the site an empty session will be created within my database and stored
    // "false" is better for performance and security - because it forces the user to be authenticated before a session is created
    store: MongoStore.create({
      // To allow MongoDB to store secure session data versus storing in memory i.e. MemoryStore/Browser
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60, // To expire sessions after 14 days
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS - for security
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie - for security
      maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds - for session duration
    },
  })
); // for initializing session management i.e. server-side security in express server

// Logging middleware to check session data - for debugging
app.use((req, res, next) => {
  
  next();
});

// CORS Implementation - to accept cross-origin requests from multiple origins
const allowedOrigins = process.env.CORS_ORIGIN // Check which CORS origin is loaded
  ? process.env.CORS_ORIGIN.split(",").map((origin) =>
      origin.replace(/\/$/, "")
    )
  : [];



// CORS Configuration Function - to handle cross-origin requests
const corsOptions = {
  origin: (origin, callback) => {
    // Normalize the incoming origin by removing trailing slashes (if any)
    const normalizedOrigin = origin ? origin.replace(/\/$/, "") : "";

    // Check if the origin is allowed
    if (!origin || allowedOrigins.includes(normalizedOrigin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error("Not allowed by CORS")); // Deny request
    }
  },
  credentials: true, // Allows the session cookie to be sent back and forth between frontend and backend
};

// Use the CORS middleware
app.use(cors(corsOptions));

// PASS WEBSOCKET ("io") TO ROUTES
app.use((req, res, next) => {
  req.io = io; // Makes "req.io" available in routes with io being defined above - so when we use "req.io"
  // it refers to our WebSocket Configuration - which becomes globally available due to express
  next(); // Proceed to the next middleware
});

// ROUTES
app.use("/api/photos", photoRoutes); // default route for photos
app.use("/api/auth", authRoutes); // default route for authentication
app.use("/api/content", contentRoutes); // default route for content
app.use("/api/openai", openaiRoutes); // default route for AI use

// Default route for health check or root
app.get("/", (req, res) => {
  res.send("API is running...");
});

// START SERVER
const PORT = process.env.PORT || 5001; // Reads environment variable for PORT or default to 5001
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
server.listen(PORT, () => {

  if (io) {

  } else {

  }
});
