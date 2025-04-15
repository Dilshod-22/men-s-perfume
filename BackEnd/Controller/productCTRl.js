const asyncHandler = require("express-async-handler");
const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const ImageKit = require("imagekit");
const path = require("path");
const streamifier = require('streamifier');
const imagekit = new ImageKit({
  publicKey: "public_rAybsQad4S9MYw+BKkmoRhSqD/I=",
  privateKey: "private_TSz93gxCDXt8uvllKTuxKwJL7a4=",
  urlEndpoint: "https://ik.imagekit.io/qk82mhvi8",
});

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
    {name:"Yuz va tana parvarishi"},
    {name:"soch parvarishi"},
    {name:"Soqol va qirilish"},
    {name:"Og'iz gigiyenasi"},
    {name:"Qo'l va Oyoq parvarishi"},
    {name:"Atir va hidlar"},
    {name:"Salomatlik"},
    {name:"Boshqalar"},
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

const imageFileUploadAssist = asyncHandler(async(req,res) => {
  console.log(req.file);
  
  try {
    if (req.file && req.file.buffer) {
      const result = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname,
      });
      console.log(result.url);
      
      return res.status(200).json({ url: result.url });
    } else {
      return res.status(400).json({ error: "No image file provided" });
    }
  } catch (error) {
    console.error("Image upload error:", error);
    return res.status(500).json({ error: "Image upload failed" });
  }
})
 

const assistCreateProduct = (getQuery, getQueryParams) => {
  return new Promise((resolve, reject) => {
    pool.query(getQuery, getQueryParams, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

const createProduct = asyncHandler(async (req, res) => {

  
  try {
    const updates = req.body;

    const allowedFields = [
      "productname",
      "brand",
      "count",
      "sku",
      "ratingproduct",
      "price",
      "category",
      "extrainfo",
      "productimage",
    ];

    let insertFields = [];
    let valuePlaceholders = [];
    let queryParams = [];
    let paramCounter = 1;

    // 🔁 Rasm yuklash (agar rasm bo‘lsa)
    let uploadedImageUrl = null;
    if (req.file && req.file.buffer) {
      await new Promise((resolve, reject) => {
        imagekit.upload(
          {
            file: req.file.buffer,
            fileName: req.file.originalname,
          },
          (error, result) => {
            if (error) {
              console.log(err);

              return reject(error);
            } else {
              uploadedImageUrl = result.url;

              resolve(result.url);
            }
          }
        );
      });
    }
    
    for (const [key, value] of Object.entries(updates)) {
      if (!allowedFields.includes(key)) continue;
      insertFields.push(key);
      valuePlaceholders.push(`$${paramCounter}`);
      if (key === "extrainfo") {
        const extrainfo = {
          detail: req.body.detail || "Himoya vositasi",
          color: req.body.color || "black",
        };
        queryParams.push(extrainfo);
      } else {
        queryParams.push(value);
      }
      paramCounter++;
    }
    if (uploadedImageUrl) {
      ('{"imageLink":"https://ik.imagekit.io/qk82mhvi8/mySkill_HDKPWYpsc.jpg","imageId":"fsvsfse23"}');
      const extraImage = {
        // status:
        imageLink: uploadedImageUrl,
        imageID: uuidv4(),
      };
      insertFields.push("productimage");

      valuePlaceholders.push(`$${valuePlaceholders.length + 1}`);
      queryParams.push(extraImage);
      paramCounter++;
    }

    const query = `
      INSERT INTO productslist (${insertFields.join(", ")})
      VALUES (${valuePlaceholders.join(", ")})
      RETURNING *;
    `;

    console.log(queryParams);

    const result = await new Promise((resolve, reject) => {
      pool.query(query, queryParams, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });

    console.log("✅ Mahsulot qo‘shildi:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("❌ Xatolik:", error);
    res.status(500).json({ error: error.message });
  }
});

const thumbnailYuklash = asyncHandler(()=>{
  const uploadThumbnail = async (fileBuffer) => {
    const resizedBuffer = await sharp(fileBuffer)
      .resize(300, 300)
      .jpeg()
      .toBuffer();
  
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'products/thumbnails' }, // ixtiyoriy papka
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url); // yoki result.public_id
        }
      );
  
      streamifier.createReadStream(resizedBuffer).pipe(uploadStream);
    });
  };
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

    let uploadedImageUrl = null;
    if (req.file && req.file.buffer) {
      await new Promise((resolve, reject) => {
        imagekit.upload(
          {
            file: req.file.buffer,
            fileName: req.file.originalname,
          },
          (error, result) => {
            if (error) {
              console.log(err);

              return reject(error);
            } else {
              uploadedImageUrl = result.url;

              resolve(result.url);
            }
          }
        );
      });
    }
    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        updateFields.push(`${key} = $${paramCounter}`);
        queryParams.push(value);
        paramCounter++;
      }
    }
    if (uploadedImageUrl) {
      let imageURl = `productimage = productimage || '[{"link": "${uploadedImageUrl}", "id": "${uuidv4()}"}]'::jsonb`;
    } else {
      let imageURl = `productimage = productimage || '[{"link": "${buffer}", "id": "${uuidv4()}"}]'::jsonb`;
    }

    let queryText = `UPDATE productsList 
        SET ${updateFields.join(", ")}, ${imageURl}
        WHERE id = $${paramCounter}
        RETURNING id, productName, brand, count, sku, ratingProduct, price, category, extraInfo, productimage`;

    queryParams.push(productId);

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
    const { userID, imageId } = req.body;
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
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const announceSkidka = asyncHandler(async (req, res) => {
  try {
  } catch (err) {}
});

const getProducts = asyncHandler(async (req, res) => {
  try {
    let queryText = `SELECT
        productname,
        brand,
        price,
        ratingproduct,
        CASE
          WHEN productimage ->> 'status' = 'thumbnail'
          THEN productimage ->> 'imageLink'
          ELSE NULL
        END AS main_image
      FROM
        productslist`;
    let resultJson = await pool.query(queryText);
    res.json(resultJson.rows).status(200).end();
  } catch (err) {
    res.json(err).status(400).end();
  }
});

const takeProduct = asyncHandler(async (req, res) => {
  console.log('keldi');
  
  const {id} = req.params;
  let newQuery = `SELECT * FROM productslist WHERE id='${id}'`;
  
  let response = await pool.query(newQuery);
  res.json(response).end();
});

module.exports = {
  getCategory,
  searchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteProductImage,
  announceSkidka,
  getProducts,
  takeProduct,
  imageFileUploadAssist
};
