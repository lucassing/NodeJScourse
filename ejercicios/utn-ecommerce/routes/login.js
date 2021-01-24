var express = require('express')
var router = express.Router();

router.post('/', function(req, res){
  let response = {"message":"Hola desde POST lOGIN"}
  res.status(200).json(response)
})
module.exports = router;
