const route = require('express').Router();
const authController = require('../controllers/Auth.Controller')

route.post("/", authController.login)

module.exports = route;