// keyGenerator.js

// Simple script to generate a secret key

// Import the crypto module
const crypto = require("crypto");

// Generate a secret key
const secretKey = crypto.randomBytes(32).toString("hex");

// Output the secret key
console.log(secretKey);

// Run script to generate a secret key
