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
    return res.status(200).json({ newContact });
  } catch (error) {
    return res.status(500).json({ error: "server error" });
  }
};

exports.getContacts = async (req, res, next) => {
  const userId = req.userId;
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

exports.updateContacts = async (req, res, next) => {
  // check for token
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const userId = req.userId;
  const { name, email, phone, type } = req.body;
  // check if contact exists
  const contactId = req.params.id;
  try {
    const theContact = await Contacts.findById(contactId);
    if (!theContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    // check if contact belongs to currently logged in user
    if (theContact.user.toString() !== userId) {
      return res.status(401).json({ error: "Not Authorized" });
    }
    const updated = {};
    if (name) updated.name = name;
    if (email) updated.email = email;
    if (phone) updated.phone = phone;
    if (type) updated.type = type;
    const updatedContact = await Contacts.findByIdAndUpdate(
      userId,
      { $set: updated },
      { new: true }
    );
    return res.status(201).json({ data: updatedContact });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
};

exports.deleteContacts = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  const userId = req.userId;
  // check if contact exists
  const contactId = req.params.id;
  try {
    const theContact = await Contacts.findById(contactId);
    if (!theContact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    // check if contact belongs to currently logged in user
    if (theContact.user.toString() !== userId) {
      return res.status(401).json({ error: "Not Authorized" });
    }
    await Contacts.findByIdAndDelete(contactId);
    return res.json({ message: "contact deleted" });
  } catch (err) {
    res.status(500).json({ error: "server error" });
  }
};
