// keyGenerator.js

// Simple script to generate a secret key

// Import the crypto module for generating random bytes
const crypto = require("crypto");

// Generate a secret key of 32 bytes and convert to hex
const secretKey = crypto.randomBytes(32).toString("hex");

// Output the secret key
console.log(secretKey);

// Run script to generate a secret key

// Didn't call secretKey like "secretKey ()" because it would be redundant
// Due to not being async, the code will run regardless when called
