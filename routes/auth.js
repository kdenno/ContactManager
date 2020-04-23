const express = require('express');
const routes = express.Router();
const {authenticate, getUser} = require("../controllers/authController");

routes.get('/', getUser);
routes.post('/', authenticate)


module.exports = routes;