const route = require('express').Router();
const userController = require('../controllers/User.Controller')

route.post("/", userController.create)

module.exports = route;