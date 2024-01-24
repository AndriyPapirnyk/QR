const express = require('express');
const router = express.Router();
const userController = require('../controllers/controllers');

router.post('/getUser', userController.getUser);
router.post('/createUser', userController.createUser);

module.exports = router;