const express = require('express');
const routes = express.Router();
const {registerUser} = require('../controllers/usersController');

routes.post('/', registerUser);

module.exports = routes;