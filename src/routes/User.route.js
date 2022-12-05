const route = require('express').Router();
const userController = require('../controllers/User.Controller')


route.get("/", userController.create)
route.post("/", userController.create)

module.exports = route;