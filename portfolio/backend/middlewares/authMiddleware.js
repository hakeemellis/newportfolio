// authMiddleware.js

/* A middleware for authentication or other functionality, 
such as checking if the user is authorized. */
const authMiddleware = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = authMiddleware;
