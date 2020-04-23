const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      // user exists, return error
      return res.status(400).json({ error: "User already exists" });
    }
    user = await User.create({ name, email, password });
    return res.json({ message: "User created", data: user });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }

  next();
};
