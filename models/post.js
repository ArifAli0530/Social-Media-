const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    caption:{
        type:String
        
    },
    image:{
        type:String
    },
    tags:{
        type:Array
    }
})

const post = mongoose.model("post",postSchema);
module.exports = post