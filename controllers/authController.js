const User = require("../models/User");
const bcrypt = require('bcrypt');

const { validationResult } = require("express-validator");

exports.getUser = () => {
  res.json({ message: "get user" });
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
    }else {

    }
    // get token
    const token = user.getSignedJwtToken();
    return res.status(200).json({ token: token});

  } catch (err) {
      console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
  next();
};
