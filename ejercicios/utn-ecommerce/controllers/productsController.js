const productsModel = require("../models/productsModel")
const categoryModel = require("../models/categoriesModel")

module.exports = {
    getAll: async function(req, res, next){
        try{
            const products = await productsModel.find({})
            res.json(products)
        }catch(e){
            next(e)
        }
    },
    getById: async function(req, res, next){
        try{
            const product = await productsModel.findById(req.params.id);
            res.json(product);
        }catch(e){
            next(e)
        }
    },

    getAllPaginate: async function(req, res, next) {
        try{
            const products = await productsModel.paginate({distinguished:true},{
                sort:{name:1},
                populate:"category",
                limit:req.query.limit || 4,
                page:req.query.page || 1
            })
            res.json(products);
        }catch(e){
        next(e);
        }
    },

    create: async function(req, res, next) {
        try{
            const category = await categoryModel.findByIdAndValidate(req.body.category);
            if(category.error){
                res.json(category);
                return;
            }
            const product = new productsModel({
                name:req.body.name,
                price:req.body.price,
                code:req.body.code,
                description:req.body.description,
                category:req.body.category,
                distinguished:req.body.distinguished
            })
            const prod = await product.save()
            res.json(prod);
        }catch(e){
            next(e);
        }
    },
    update: async function(req, res, next) {
        try {
          let product = await productsModel.updateOne({ _id: req.params.id }, req.body, { multi: false })
          res.json(product)
        } catch (e) {
          next(e)
        }
    },
    delete: async function(req, res, next) {
        try{
          let product = await productsModel.deleteOne({ _id: req.params.id })
          res.json(product)
        } catch (e) {
          next(e)
        }
    }
}






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
