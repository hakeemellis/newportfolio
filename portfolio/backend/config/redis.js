// config/redis.js

// Logic for connecting to Redis - using Ioredis 
// Used for caching

const redis = require("ioredis");

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

module.exports = client;
