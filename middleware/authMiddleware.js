const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ error: "Token missing, Not Authorized" });
  }
  try {
    const decoded = jwt.verify(token, config.get("JWT_SECRET"));
    req.userId = decoded.id;
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
  next();
};
