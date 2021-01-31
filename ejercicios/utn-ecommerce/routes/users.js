var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* GET users listing. */
router.post('/login', userController.login);
router.post('/', userController.create);

module.exports = router;
