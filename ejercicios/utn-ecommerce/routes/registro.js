var express = require('express')
var router = express.Router();

router.get('/', function(req, res, next){
  let response = {"message":"Hola desde GET REGISTER"}
  res.status(200).json(response)
})
router.post('/', function(req, res, next){
  let response = {"message":"Hola desde POST REGISTER"}
  res.status(200).json(response)
})
module.exports = router;
