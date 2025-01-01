Backend Structure with MongoDB

portfolio-backend/
├── config/
│   └── db.js (entry/connection point for the database being connected to)
├── models/
│   └── Project.js (to establish project's schema markup and logic around schema if needed)
├── routes/
│   └── projectRoutes.js (main purpose is just to map routes with using GET, POST and DELETE ability)
├── .env
├── server.js
└── package.json


Explained a bit:

project-root/
├── backend/          # Contains all backend-related code
│   ├── config/       # MongoDB and other configurations
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── .env          # Environment variables
│   ├── server.js     # Main server entry point
│   └── package.json  # Backend dependencies
├── frontend/         # Contains Vue.js project
│   ├── src/          # Vue.js source code
│   ├── public/       # Public assets
│   ├── package.json  # Frontend dependencies
│   └── ...
└── README.md         # Project documentation


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
