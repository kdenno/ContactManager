const express = require("express");
const routes = express.Router();
const { authenticate, getUser } = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require('../middleware/authMiddleware');

routes.get("/", authMiddleware, getUser);
routes.post("/",
  [
    check("email", "Please Enter Email").isEmail(),
    check("password", "Please Enter Password").not().isEmpty(),
  ],
  authenticate
);

module.exports = routes;
