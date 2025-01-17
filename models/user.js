const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true
    },
    phone:{
        type:Number,
        required :true
    },
    gender:{
        type:String,
        required :true
    },
    age:{
        type:Number,
       default :18
    },
    password: {
        type:String,
        required: true
    }
})

const User = mongoose.model("User",userSchema);
module.exports = User