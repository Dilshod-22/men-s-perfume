const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./config/dbConnection");



dbConnect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("uploads"));


const UserRoute = require("./Routers/userRouter");
const ProductRoute = require("./Routers/productRouter");

app.use("/api/user/",UserRoute);
app.use("/api/product/",ProductRoute);





const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("server is running");
})