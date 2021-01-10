var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController")


/* GET home page. */
router.get('/', productsController.getAll)

module.exports = router;
