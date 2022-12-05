const route = require('express').Router();
const hubSpotController = require('../controllers/HubSpot.Controller')

route.post('/', hubSpotController.store);

module.exports = route;