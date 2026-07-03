const express=require('express')
const authcontroller=require('../controllers/auth.controller')

const router=express.Router()

router.post('/register',authcontroller.registeruser)
router.get('/test',(req,res)=>{
    console.log("Cookies",req.cookies);

    res.json({
        message:"cookies",
        cookies:req.cookies
    })
    
})

module.exports=router