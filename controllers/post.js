const Post  = require("../models/post.js");

exports.getPost = async (req,res)=>{
    try {
        const posts =await Post.find();
        res.send({posts,msg:"All posts"});
    } catch (error) {
        console.log(error);
    }
}

exports.createPost = async (req,res)=>{
    try {
        const created = new Post(req.body);
        const result = await created.save();
        res.send({result, msg: "created post "})

    } catch (error) {
        console.log(error);
    }

}

exports.updatePost = async(req,res)=>{

    try {
        const updated =await Post.findByIdAndUpdate({_id:req.params._id},req.body);
        res.send({updated, msg:"Updated post"})
    } catch (error) {
        console.log(error);
    }

}

exports.deletePost= async(req,res)=>{
    try {
        await Post.findByIdAndDelete({_id:req.params._id})
        res.send(" Post Deleted")
    } catch (error) {
        console.log(error);
    }
}