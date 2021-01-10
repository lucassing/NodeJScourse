const eg_products = [
  {"id":1,"name":"test1"},
  {"id":2,"name":"test2"},
  {"id":3,"name":"test3"},
  {"id":4,"name":"test4"},
  {"id":5,"name":"test5"},
]
module.exports = {
  getAll: async function(req, res, next){
    let products = eg_products
    res.status(200).json(products)
  }
}
