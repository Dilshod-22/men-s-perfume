const Route = require("express").Router();
const multer = require("multer");
const path = require("path");


const {
    getBaseInfo,

} = require("../Controller/adminCTRL");






Route.get("/get/baseInfo",getBaseInfo);






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