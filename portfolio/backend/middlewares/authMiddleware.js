// authMiddleware.js

// JSON Web Token (JWT) is a standard used to create access tokens for an application.
// It works this way: the server generates a token that certifies the user identity, and sends it to the client.
// Kept for future use (not used in this project)

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
