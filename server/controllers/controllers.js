const User = require('../models/user');

//

exports.getUser = async (req, res) => {
  res.send('Device ID: ' + req.deviceId);
};

