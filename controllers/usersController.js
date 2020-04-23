const { validationResult } = require("express-validator");

exports.registerUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });

  }
  res.json({ message: "passed" });
  next();
};
