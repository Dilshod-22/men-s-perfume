const Route = require("express").Router();
const multer = require("multer");
const path = require("path");


const {
    getCategory,
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteProductImage,
    announceSkidka
} = require("../Controller/productCTRl");



const storage = multer.diskStorage({
    destination: "./uploads", // Upload folder
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });



Route.get("/get/categoriya",getCategory);
Route.post("/searchProduct",searchProduct);
Route.post("/createProduct",createProduct);
Route.put("/updateProduct/:id",upload.single("productimage"),updateProduct);
Route.delete("/deleteProduct/:id",deleteProduct);
Route.post("/deleteProductImage",deleteProductImage);
Route.post("/announceSkidka",announceSkidka);




module.exports = Route;