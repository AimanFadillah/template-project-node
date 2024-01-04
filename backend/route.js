import express from "express";
import LoginController from "./controllers/LoginController.js";
import { checkLogin, checkValidate } from "./functions/check.js";

import UserController from "./controllers/UserController.js";


const Route = express.Router();

Route.post("/api/login",LoginController.validate,checkValidate,LoginController.login);
Route.get("/api/logout",checkLogin,LoginController.logout);
Route.get("/api/user",checkLogin,UserController.index);
Route.post("/api/user",UserController.validate,checkValidate,UserController.store);

export default Route;