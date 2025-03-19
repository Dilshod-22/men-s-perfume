const Route = require("express").Router();

const {
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../Controller/productCTRl");

Route.post("searchProduct",searchProduct);
Route.post("createProduct",createProduct);
Route.put("updateProduct",updateProduct);
Route.del("deleteProduct/:id",deleteProduct);



module.exports = Route;