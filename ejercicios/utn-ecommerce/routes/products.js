var express = require('express')
var router = express.Router();

var productsController = require("../controllers/productsController")

router.get('/', productsController.getAll)
router.get('/paginate', productsController.getAllPaginate);
router.get('/:id', productsController.getById)




router.post('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.create)
router.put('/:id', productsController.update)
router.delete('/:id', productsController.delete)

module.exports = router;
