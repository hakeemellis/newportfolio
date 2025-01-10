// middlewares/cache.js

const redis = require("../config/redis");

const cache = async (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = await redis.get(key);

  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  res.sendResponse = res.json;
  res.json = (data) => {
    redis.set(key, JSON.stringify(data), "EX", 3600); // Cache for 1 hour
    res.sendResponse(data);
  };

  next();
};

module.exports = cache;
