// server.js

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const cors = require("cors");

dotenv.config();
const app = express();

// CONNECT TO MONGO-DB
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(cors()); // CORS for handling cross-origin requests (especially from frontend)

// ROUTES

// Route for projects
app.use("/api/projects", projectRoutes); // Mount the project routes

// Endpoint to generate a signed URL
app.get("/generate-signed-url", (req, res) => {
  const { publicId, transformations } = req.query;

  // Validate input
  if (!publicId) {
    return res.status(400).json({ error: "Missing publicId parameter" });
  }

  const options = JSON.parse(transformations || "{}");
  const signedUrl = cloudinary.url(publicId, {
    ...options,
    sign_url: true,
  });

  res.json({ signedUrl });
});

// START SERVER
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
