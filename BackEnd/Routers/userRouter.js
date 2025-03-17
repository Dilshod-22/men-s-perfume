const Route = require("express").Router();
const {
    getAllUser,
    createUser,
    searchUser,
    updateUser
} = require("../Controller/userCTRL");


Route.get("/getAllUser",getAllUser);
Route.post("/createUser",createUser);
Route.post("/searchUser",searchUser);
Route.put("/updateUser/:id",updateUser);

module.exports = Route;