const User = require("../models/User");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

exports.getUser = async (req, res, next) => {
  const userId = req.userId;
  try {

  const user = await User.findById(userId).select("-password");
  res.json({ data: user });
    
  } catch (error) {
    console.log(error);
    
  }
  next();
};

exports.authenticate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    } else {
    }
    // get token
    const token = user.getSignedJwtToken();
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
  next();
};
