const express = require("express");
const {signin, signup } = require("../controllers/auth.js");
const authRouter = express.Router();

authRouter.post("/signin",signin);
authRouter.post("/signup",signup);


module.exports=authRouter; 