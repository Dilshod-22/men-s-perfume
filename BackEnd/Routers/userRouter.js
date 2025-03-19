const Route = require("express").Router();
const multer = require("multer");
const path = require("path");
const {
    getAllUser,
    createUser,
    searchUser,
    updateUser
} = require("../Controller/userCTRL");

const storage = multer.diskStorage({
    destination: "./uploads", // Upload folder
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });




Route.get("/getAllUser",getAllUser);
Route.post("/createUser",createUser);
Route.post("/searchUser",searchUser);
Route.put("/updateUser/:id",upload.single("profile_image_url"),updateUser);

module.exports = Route;