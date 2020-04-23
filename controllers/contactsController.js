const Contacts = require("../models/Contact");

exports.createContacts = (req, res, next) => {
  res.json({ message: "create contacts" });
  next();
};
exports.getContacts = async (req, res, next) => {
  const userId = req.UserId;
  try {
    const userContacts = await Contacts.find({ user: userId }).sort({ data: -1});
    res.json({ data: userContacts });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
  next();
};

exports.updateContacts = (req, res, next) => {
  res.json({ message: "update user contacts" });
  next();
};
exports.deleteContacts = (req, res, next) => {
  res.json({ message: "delete user contacts" });
  next();
};
