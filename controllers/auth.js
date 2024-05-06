const bcrypt = require("bcrypt");
const User  = require("../models/user.js")
const jwt = require("jsonwebtoken")

exports.signup= async (req,res)=>{
    try {
        const {name,email,password,phone,gender,age}=req.body;
        const salt = await bcrypt.genSaltSync(10);
        const hashedpassword = await bcrypt.hashSync(password,salt);
        const tobeCreated = new User( {name,email,password:hashedpassword,phone,gender,age})
        const user = await tobeCreated.save();
        res.send("User successfully created... ")
    } catch (error) {
        console.log(error);
    }
}

exports.signin = async (req,res)=>{
try {
    const {email,password} = req.body;
    const user = await User.findOne({email:email});

    if(user){
        const matched =await bcrypt.compare(password,user.password);
        if(matched){
            const token = jwt.sign({email,password},"mk",{expiresIn:"1h"})
            res.send({token ,msg:"Signed in successful"})
            
        }else{
            res.status(401).send("wrong password ")
        }
    }else{
        res.status(404).send("User not found");
    }

} catch (error) {
    console.log(error);
}
}