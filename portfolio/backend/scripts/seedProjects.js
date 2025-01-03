// seedProjects.js

// Essentially a script to seed the database - TO BE RUN ONLY ONCE

// Script to seed the database with sample projects to populate project schema

const mongoose = require("mongoose");
const Project = require("../models/Project"); // Mongoose model for projects
const connectDB = require("../config/db"); // MongoDB connection

// Connect to the database
connectDB();

// Seed data to populate
const projects = [
  {
    title: "SuiteHaven",
    description: "This is a project created in React",
    tags: ["React", "API"],
    photo: "https://example.com/photo.jpg",
    link: "https://example.com/demo",
  },
  {
    title: "Project Two",
    description: "A project using Vue.js",
    tags: ["Vue", "Design"],
    photo: "https://example.com/photo2.jpg",
    link: "https://example.com/demo2",
  },
];

// Function to seed the database
const seedProjects = async () => {
  try {
    // Delete any existing projects
    await Project.deleteMany();

    // Insert the seed projects
    await Project.insertMany(projects);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedProjects();
