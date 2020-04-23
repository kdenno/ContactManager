const Contacts = require("../models/Contact");
const { validationResult } = require("express-validator");

exports.createContacts = async (req, res, next) => {
  const userId = req.userId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array() });
  }
  req.body.user = userId;
  try {

    const newContact = await Contacts.create(req.body);
    return res.status(200).json({ data: newContact });

  } catch (error) {

    return res.status(500).json({ error: "server error" });
  }
};

exports.getContacts = async (req, res, next) => {
  const userId = req.userId;
  console.log(userId);
  try {
    const userContacts = await Contacts.find({ user: userId }).sort({
      data: -1,
    });
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
