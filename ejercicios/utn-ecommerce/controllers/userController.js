const userModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    create: async function (req, res, next){
        try{
            const user = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            newUser = await user.save();
            res.json(newUser);
        }catch(e){
            res.json({message:e.message})
        }
    },

    login: async (req, res, next) => {
        try{
            const user = await userModel.findOne({email:req.body.email})
            if(!user){
                res.json({error:true,message:"Email erroneo"})
                return
            }
            if(bcrypt.compareSync(req.body.password,user.password)){
                console.log("valid")
                const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({error:false,message:"Logged",token:token})
                return
            }else{
                res.json({error:true,message:"Login fallo"})
                return
            }
        }catch(e){
             res.json({message:e.message})
        }
    },
}