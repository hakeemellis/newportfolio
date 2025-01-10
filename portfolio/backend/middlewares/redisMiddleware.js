// middlewares/redisMiddleware.js

const redisClient = require("../config/redis");

const redisMiddleware = async (req, res, next) => {
    try {
        await redisClient.connect(); // Connect to Redis
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error("Redis connection error:", error);
        res.status(500).json({ error: "Redis connection error" });
    }
};

module.exports = redisMiddleware;