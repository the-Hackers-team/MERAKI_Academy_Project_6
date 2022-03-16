const express = require("express");
const authentication = require("../middleware/authentication");
//create user router

const userRouter = express.Router();

// import users controllers from "userControllers"

const {
  register,
  login,
  updateUserById,
  deleteUserById,
  getAllUsers,
  getUserById,
  getchannelById,
} = require("../controllers/UsersController");

//create end points

//1- create end points for register

userRouter.post("/register", register);

//2- create end points for login

userRouter.post("/login", login);

//3- create end points for update user

userRouter.put("/", authentication, updateUserById);

//4- create end points for delete user

userRouter.delete("/", authentication, deleteUserById);

//4- create end points for getAllUsers user

userRouter.get("/", authentication, getAllUsers);

//4- create end points for get user
userRouter.get("/profile", authentication, getUserById);

userRouter.get("/channelDetails/:id", getchannelById);

module.exports = { userRouter };
