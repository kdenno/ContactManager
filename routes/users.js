const express = require("express");
const routes = express.Router();
const { check, validationResult } = require("express-validator");
const { registerUser } = require("../controllers/usersController");

routes.post("/",
  [
      check("name", "Please add Name").not().isEmpty(),
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a password with 6 or more characters").isLength({min: 6})
    ], registerUser
);

module.exports = routes;
