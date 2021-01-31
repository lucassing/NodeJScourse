var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://127.0.0.1:27017/utn', { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});
mongoose.mongoosePaginate = mongoosePaginate;
module.exports = mongoose;
