const User = require("../models/User.model");

const loginService = (email) => 
  User.findOne({ email: email }).select("+document");

module.exports = {loginService}; 