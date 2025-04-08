const asyncHandler = require("express-async-handler");
const {Pool} = require("pg");

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '0102',
  port: 5432, 
});

function imageToBase64(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    return `data:image/png;base64,${imageBuffer.toString("base64")}`;
}

const getAllUser = asyncHandler(async(req,res) => {
    let allUSer = await pool.query("SELECT * FROM usersList");
    res.json(allUSer.rows).end();
})


const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body;
    try{
        let query = `SELECT id, username, preferred_language,profile_image_url
FROM userslist
WHERE email = '${email}' AND password_hash = '${password}'`;
// console.log(query);

        let sorov =await  pool.query(query);
        res.json(sorov).end();
    }catch(err){
        res.json(err).status(200);
    }
});


const searchUser = asyncHandler(async(req,res)=>{
    try{
        const { username } = req.body;
        const query = `
            SELECT id, username, email, phone_number, profile_image_url, registration_date, preferred_language
            FROM usersList
            WHERE username ILIKE $1
            ORDER BY username
        `;
        const result = await pool.query(query, [`%${username}%`]);
        res.json({
            count: result.rows.length,
            users: result.rows
        }).end();
    }catch(err){
        console.error('Error searching users:', err);
        res.status(500).json({ error: err.message });
    }
})

const createUser = asyncHandler(async(req,res)=>{
    
    const {
        username,
        email,
        password
    } = req.body;
    try{
        const query = `
            INSERT INTO usersList (username, email, password_hash, preferred_language) 
            VALUES ($1, $2, $3, $4)
        `;
        await pool.query(query, [username, email, password, 'uz']);
        res.json("success").end();
    }catch(err){
        res.json(err).end();
    }
});


const updateUser = asyncHandler(async(req,res)=>{

    
    // if (!req.file) {
    //     return res.send("Please upload an image");
    // }
    // res.render("index", { image: `/uploads/${req.file.filename}` });
    const userId = req.params.id; // Get user ID from URL parameter
    const updates = req.body;
    updates.profile_image_url=req.file.path;
    
    // const base64Image = imageToBase64(imagePath);
    try{
        const updateFields = [];
        const queryParams = [];
        let paramCounter = 1;
        
        // Only process fields that exist in our table
        const allowedFields = ['username', 'email', 'phone_number', 'profile_image_url', 'preferred_language', 'birth_date', 'is_active'];
        
        for (const [key, value] of Object.entries(updates)) {
            if (allowedFields.includes(key)) {
                updateFields.push(`${key} = $${paramCounter}`);
                queryParams.push(value);
                paramCounter++;
            }
        }
        // let obj ={
        //     username : "dilshodbek"
        // }

        const updateQuery = `
            UPDATE usersList 
            SET ${updateFields.join(', ')}
            WHERE id = $${paramCounter}
            RETURNING id, username, email, phone_number, profile_image_url, preferred_language, birth_date, is_active
        `;
        
        // Add user ID as the last parameter
        queryParams.push(userId);
        
        const result = await pool.query(updateQuery, queryParams);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({
            status: 'success',
            message: 'User updated successfully',
            user: result.rows[0]
        });
    }catch(err){
        console.error('Error update user:', err);
        res.status(500).json({ error: err.message }).end();
    }
})

module.exports = {
    loginUser,
    getAllUser,
    createUser,
    searchUser,
    updateUser,
}


// skidka base1