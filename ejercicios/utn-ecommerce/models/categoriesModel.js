const mongoose = require("../bin/mongodb")

const categorySchema = new mongoose.Schema({
    name:String
})
categorySchema.statics.findByIdAndValidate = async function(id){
    const category = await this.findById(id);
    if(!category){
        return{
            error: true,
            message: "No existe categoria"
        }
    }
    return category
}
module.exports = mongoose.model("categories", categorySchema)