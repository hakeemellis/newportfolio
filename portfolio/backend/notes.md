Backend Structure with MongoDB

portfolio-backend/
├── config/
│   └── db.js (entry/connection point for the database being connected to)
├── models/
│   └── Project.js (to establish project's schema markup and logic around schema if needed)
├── routes/
│   └── projectRoutes.js (main purpose is just to map routes with using GET, POST and DELETE ability)
├── .env (where we put our login information and set the port we logging in from)
├── server.js
└── package.json


Explained A Bit - Full Route:

/backend
├── /config
│   └── db.js              # MongoDB connection logic
├── /models
│   └── Project.js         # Mongoose schema for projects
├── /routes
│   └── projectRoutes.js   # Routes for handling project API requests
├── /controllers
│   └── projectController.js  # Logic for handling requests
├── /middlewares
│   └── authMiddleware.js  # (Optional) Authentication middlewares, if needed
├── /utils
│   └── cloudinary.js      # Cloudinary utility functions for handling media
├── /scripts
│   └── seedProjects.js    # Script for seeding initial data
├── .env                   # Environment variables (DB connection strings, API keys, etc.)
├── server.js              # Main entry point for the backend
├── package.json           # Backend dependencies and scripts
└── package-lock.json      # Lock file for backend dependencies


One:

Initalize the project to generate or package.json using: npm init -y

Two:

Use: npm install express mongoose dotenv cors body-parser

	•	express: Framework for building APIs.
	•	mongoose: MongoDB object modeling.
	•	dotenv: Manage environment variables.
	•	cors: Handle cross-origin requests.
	•	body-parser: Parse incoming JSON data.


Three: 

Use: npm install --save-dev nodemon (in the event it fails or changes are made in realtime)


When setup, to initialize and test backend: npx nodemon server.js

require("dotenv").config(); - is literally put in just to load the actual file (.env). Without it, the database will not be able to function


Simple Project Schema: 

/* Very simple Project Schema and Model 
const TestSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const TestModel = mongoose.model("Test", TestSchema); 

//The express route for the the simple Project Schema
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

*/
