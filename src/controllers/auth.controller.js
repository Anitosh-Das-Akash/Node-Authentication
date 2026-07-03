const jwt = require('jsonwebtoken')
const usermodel=require('../models/user.model')


async function registeruser(req,res) {

    const{username,email,password}=req.body

    const user=await usermodel.create({
        username,email,password
    })

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token)


    res.status(201).json({
        message:"User Registered Successfully",
        user,
        token
    })
    
}
module.exports={registeruser}