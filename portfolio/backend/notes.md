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


How to Start Backend: node server.js or npx nodemon server.js (nodemon auto restarts the server on changes)


Use: NODE_ENV=production/staging/development node server.js - to establish node server environment


Only use process.exit ( ) / (0) - which means success and process.exit (1) when the function is only intended to be ran once and not continually as modular data i.e. because it won't know when to end technically


Redis: redis-server - to initialize 

Using bcrypt, we can has passwords before storing it to the database.

Might be basic but know that MongoDB assigns an id by default to an element which can be accessed through ( ._id )