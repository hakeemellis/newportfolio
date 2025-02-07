// config/openai.js

// Logic for connecting to OpenAI

// Application Modules
const OpenAI = require("openai"); // Import OpenAI for AI-powered features

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai; // Export as a modular variable