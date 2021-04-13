const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

exports.generateToken = function(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
};
