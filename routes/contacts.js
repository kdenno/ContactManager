const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {check} = require('express-validator');
const routes = express.Router();
const {
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactsController");

routes.get("/", authMiddleware, getContacts);
routes.post("/", [authMiddleware, [
  check('name', "Please provide name")

]], createContacts);
routes.put("/:id", updateContacts);
routes.delete("/:id", deleteContacts);

module.exports = routes;
