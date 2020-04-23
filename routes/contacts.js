const express = require("express");
const routes = express.Router();
const {
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactsController");

routes.get("/", getContacts);
routes.post("/", createContacts);
routes.put("/:id", updateContacts);
routes.delete("/:id", deleteContacts);

module.exports = routes;
