const port = 8000;
const express= require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app=express();
const authRouter = require("./routes/auth.js");
const postRouter = require("./routes/post.js");

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect("mongodb+srv://aa9884433:arif123@cluster0.j6oijyx.mongodb.net/")
        if(connect){
            console.log(" your mongoDb is connected successful..")
        }

    } catch (error) {
        console.log(error);
    }

}
connectDb();

app.use(cors()) 

app.use(bodyparser.json({
    limit : '100mb',
    extended: true
}))

app.use(bodyparser.urlencoded({
    limit : '100mb',
    extended: true
}));

app.use("/auth",authRouter);
app.use("/post",postRouter);



app.listen(port,()=>{
    console.log('server is running kaifu...');
})