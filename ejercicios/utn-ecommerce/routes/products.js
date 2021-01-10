var express = require('express')
var router = express.Router();

var productsController = require("../controllers/productsController")

router.get('/', productsController.getAll)
// router.get('/:id([0-9]+)', function(req,res,next){
//   console.log(req.query.name);
//   console.log(req.params.id);
//   res.render('catalogo', {title: 'Products'})
// })
//
// router.get('/', function(req,res){
//   console.log('home');
// })
//
// router.get('/destacados', function(req,res){
//   console.log('destacados');
// })
module.exports = router;
