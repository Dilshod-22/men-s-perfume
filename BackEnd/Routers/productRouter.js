const Route = require("express").Router();

const {
    getCategory,
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../Controller/productCTRl");

Route.get("gert/categoriya",getCategory);
Route.post("searchProduct",searchProduct);
Route.post("createProduct",createProduct);
Route.put("updateProduct",updateProduct);
Route.del("deleteProduct/:id",deleteProduct);



module.exports = Route;