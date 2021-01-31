const mongoose = require("../bin/mongodb");
const validators = require("../util/validators")
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"El Nombre de usuario es necesario"],
        unique:true
    },
    email: {
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:[true,"La contrasena es necesaria"],
        validate:{
            validator: function(v){
                return validators.isGoodPassword(v)
            },
            message:"Password erronea"
        }
    }
})

userSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
userSchema.statics.findByIdAndValidate = async function(id){
    const user = await this.findById(id);
    if(!user){
        return{
            error:true,
            message:"El usuario no existe"
        }
    }
    return document;
}
module.exports = mongoose.model("user", userSchema)