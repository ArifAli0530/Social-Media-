const jwt = require("jsonwebtoken");

exports.authenticator = async(req,res,next)=>{
try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, "mk");
    next();
} catch (error) {
    console.log(error);
    res.status(401).send("invalid token");
}
}