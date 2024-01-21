const User = require('../models/user');

//
exports.test = async (req, res) => {
  res.send('it is server')
}

exports.getUser = async (req, res) => {
  res.send('Device ID: ' + req.deviceId);
};

