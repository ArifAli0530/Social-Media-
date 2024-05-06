const express = require("express");
const { getPost, createPost, updatePost , deletePost } = require("../controllers/post");
const {authenticator} = require("../middlewares/authenticator.js")
const postRouter = express.Router();

postRouter.get("/getPost",authenticator,getPost);
postRouter.post("/createPost",authenticator,createPost);
postRouter.put("/updatePost/:_id",authenticator,updatePost);
postRouter.delete("/deletePost/:_id",authenticator,deletePost);



module.exports = postRouter;