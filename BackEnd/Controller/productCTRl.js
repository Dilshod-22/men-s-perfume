const asyncHandler = require("express-async-handler");
const {Pool} = require("pg");

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '0102',
  port: 5432, 
});


const searchProduct = asyncHandler(async(req,res) => {

})

const createProduct = asyncHandler(async(req,res) => {
   const {
        productName,
        brand,
        count,
        price,
        category,
        extrainfo 
   } = req.body;

    try{
        let  queryText = "INSERT INTO productsList (productName, brand, count, sku, ratingProduct, price, category, extraInfo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        await pool.query(queryText, [productName, brand, count, price, category, extrainfo]);
        res.json("success").end();
    }catch(err){
        res.status(500).json({ error: err.message });    
    }
})
const updateProduct = asyncHandler(async(req,res) => {
    const productId = req.params.id;
    const updates = req.body;
    try{
        const updateFields = [];
        const queryParams = [];
        let paramCounter = 1;
        
        // Only process fields that exist in our table
        const allowedFields = ['productName', 'brand', 'count', 'sku', 'ratingProduct', 'price', 'category', 'extraInfo'];
        
        for (const [key, value] of Object.entries(updates)) {
            if (allowedFields.includes(key)) {
                updateFields.push(`${key} = $${paramCounter}`);
                queryParams.push(value);
                paramCounter++;
            }
        }
        let queryText = `UPDATE productsList 
        SET ${updateFields.join(', ')}
        WHERE id = $${paramCounter}
        RETURNING id, productName, brand, count, sku, ratingProduct, price, category, extraInfo`;
        queryParams.push(productId);
        
        const result = await pool.query(queryText, queryParams);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'product not found' });
        }
        
        res.json({
            status: 'success',
            message: 'Product updated successfully',
            user: result.rows[0]
        });
    }catch(err){
        res.status(500).json({ error: err.message });
    }    
})
const deleteProduct = asyncHandler(async(req,res) => {
    const productId = req.params.id;
    const updates = req.body;
    try{
        const updateFields = [];
        const queryParams = [];
        let paramCounter = 1;
        
        // Only process fields that exist in our table
        const allowedFields = ['productName', 'brand', 'count', 'sku', 'ratingProduct', 'price', 'category', 'extraInfo'];
        
        for (const [key, value] of Object.entries(updates)) {
            if (allowedFields.includes(key)) {
                updateFields.push(`${key} = $${paramCounter}`);
                queryParams.push(value);
                paramCounter++;
            }
        }
        let queryText = `UPDATE productsList 
        SET ${updateFields.join(', ')}
        WHERE id = $${paramCounter}
        RETURNING id, productName, brand, count, sku, ratingProduct, price, category, extraInfo`;
        queryParams.push(productId);
        
        const result = await pool.query(queryText, queryParams);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'product not found' });
        }
        
        res.json({
            status: 'success',
            message: 'Product updated successfully',
            user: result.rows[0]
        });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})


module.exports = {
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct,  
}