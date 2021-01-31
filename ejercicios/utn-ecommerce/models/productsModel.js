const mongoose = require("../bin/mongodb")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"El nombre es necesario"],
        minlength:1,
        maxlength:10
    },
    price:{
        type:Number,
        required:[true,"El precio es necesario"],
        get:function(price){
            return price*1.21
        }
    },
    code:{
        type:String,
        required:[true,"El codigo es necesario"],
    },
    description:{
        type:String,
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    distinguished:{
        type:Boolean
    }
})
productSchema.virtual("price_currency").get(function(){
    return "$ "+this.price
})
productSchema.set("toJSON",{getters:true,virtuals:true})
productSchema.plugin(mongoose.mongoosePaginate);
module.exports=mongoose.model("products",productSchema)