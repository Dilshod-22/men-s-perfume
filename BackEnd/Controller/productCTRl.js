const { query } = require("express");
const asyncHandler = require("express-async-handler");
const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "0102",
  port: 5432,
});
const getCategory = asyncHandler(async (req, res) => {
  console.log("ishladi");

  let category = [
    "Yuz va tana parvarishi",
    "soch parvarishi",
    "Soqol va qirilish",
    "Og'iz gigiyenasi",
    "Qo'l va Oyoq parvarishi",
    "Atir va hidlar",
    "Oziqlantiruvchilar",
    "Quyoshdan himoya vositalari",
    "Salomatlik",
    "Boshqalar",
  ];
  res.json(category).end();
});
const searchProduct = asyncHandler(async (req, res) => {
  const { productName } = req.body;
  const query = `
        SELECT id, productName, brand, count, sku, price, productimage
        FROM productsList
        WHERE productName ILIKE $1
        ORDER BY productName
    `;

  const result = await pool.query(query, [`%${productName}%`]);
  res
    .json({
      count: result.rows.length,
      users: result.rows,
    })
    .end();
});
const createProduct = asyncHandler(async (req, res) => {
  const { productName, brand, sku, count, price, category, extrainfo } =
    req.body;

  try {
    let queryText =
      "INSERT INTO productsList (productName, brand, count, sku, price, category, extraInfo) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    await pool.query(queryText, [
      productName,
      brand,
      sku,
      count,
      price,
      category,
      extrainfo,
    ]);
    res.json("success").end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const updateProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const updates = req.body;
  try {
    const updateFields = [];
    const queryParams = [];
    let paramCounter = 1;

    const allowedFields = [
      "productName",
      "brand",
      "count",
      "sku",
      "ratingProduct",
      "price",
      "category",
      "extraInfo",
    ];

    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        updateFields.push(`${key} = $${paramCounter}`);
        queryParams.push(value);
        paramCounter++;
      }
    }
    const pathFileImage = req.file.path;
    const updatedPath = pathFileImage.replace(/\\/g, "/");
    console.log(updatedPath);

    let imageURl = `productimage = productimage || '[{"link": "${updatedPath}", "id": "${uuidv4()}"}]'::jsonb`;

    let queryText = `UPDATE productsList 
        SET ${updateFields.join(", ")}, ${imageURl}
        WHERE id = $${paramCounter}
        RETURNING id, productName, brand, count, sku, ratingProduct, price, category, extraInfo, productimage`;

    queryParams.push(productId);
    console.log(queryText);

    const result = await pool.query(queryText, queryParams);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "product not found" });
    }

    res.json({
      status: "success",
      message: "Product updated successfully",
      user: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  try {
    await pool.query(`DELETE FROM productslist WHERE id = ${productId};`);
    res.json({
      status: "success",
      message: "Product delete successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const deleteProductImage = asyncHandler(async (req, res) => {
  try {
    const {userID,imageId} = req.body;
    let textQuery = `UPDATE productslist
          SET productimage = (
              SELECT jsonb_agg(elem)
              FROM jsonb_array_elements(productimage) elem
              WHERE elem->>'id' <> '${imageId}'
          )
          WHERE id = '${userID}'`;
    await pool.query(textQuery);
    res.json({
      status: "success",
      message: "Product image delete successfully",
    });
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
});

const announceSkidka = asyncHandler(async (req, res) => {
  try {
      
  }catch(err){

  }
})


module.exports = {
  getCategory,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteProductImage,
  announceSkidka
};
