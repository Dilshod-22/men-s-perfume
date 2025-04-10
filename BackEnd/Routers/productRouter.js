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
    announceSkidka,
    getProducts,
    takeProduct
} = require("../Controller/productCTRl");



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



Route.get("/get/categoriya",getCategory);
Route.post("/searchProduct",searchProduct);
Route.post("/createProduct", upload.single("productimage"),createProduct);
Route.put("/updateProduct/:id",upload.single("productimage"),updateProduct);
Route.delete("/deleteProduct/:id",deleteProduct);
Route.post("/deleteProductImage",deleteProductImage);
Route.post("/announceSkidka",announceSkidka);
Route.get("/get/ProdcutsMix",getProducts);
Route.post("/takeProductInfo/:id",takeProduct)




module.exports = Route;



// try {
//     const { productname, brand, sku, count, price, category } = req.body;
    
//     // Create a properly formatted JSON object
//     const extrainfo = { 
//       detail: req.body.detail || "Himoya vositasi", 
//       color: req.body.color || "black" 
//     };
  
//     const query = `
//       INSERT INTO productslist (productname, brand, sku, count, price, category, extrainfo)
//       VALUES ($1, $2, $3, $4, $5, $6, $7)
//       RETURNING *;
//     `;
  
//     const params = [productname, brand, sku, count, price, category, extrainfo];
    
//     const result = await pool.query(query, params);
//     console.log("✅ Mahsulot qo'shildi:", result.rows[0]);
//     res.json(result.rows[0]);
  
//   } catch (error) {
//     console.error("❌ Xatolik:", error);
//     res.status(500).json({ error: error.message });
//   }