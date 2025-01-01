// server.js
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define a simple schema and model (you can later move this to a separate file)
const TestSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const TestModel = mongoose.model("Test", TestSchema);

// Test route to add data
app.get("/add-test-data", async (req, res) => {
  try {
    const newItem = new TestModel({ name: "John Doe", age: 30 });
    await newItem.save();
    res.send("Test data added!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving data.");
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
