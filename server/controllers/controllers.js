const User = require('../models/user');

//
exports.test = async (req, res) => {
  res.send('it is server')
}

exports.getUser = async (req, res) => {
  try {
    // console.log(req.deviceId);

    const existingUser = await User.findOne({ userId: req.deviceId });
    if (existingUser) {
      console.log('User exists:', existingUser);
      res.status(200).send(true);
      console.log("exist");
    } else {
      const currentDate = new Date();
      
      // if(86400000 < today.getTime()-pastDate.getTime()) 

      res.status(200).send(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createUser = async (req, res) => {
  try {
    const userName = req.body.userName;
    let today =  new Date();
    const newUser = new User({ userId: req.deviceId, name: userName, count: 1, lastScan: today.getTime()  });
    await newUser.save();
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}


