var express = require('express');

const UserController = require('../Controller/User')
var router = express.Router();

/* GET users listing. */
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;
