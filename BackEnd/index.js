const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/dbConnection");


dbConnect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const UserRoute = require("./Routers/userRouter");


app.use("/api/user/",UserRoute);






const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("server is running");
})