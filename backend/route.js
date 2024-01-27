import express from "express";
import LoginController from "./Controllers/LoginController.js";
import { checkLogin } from "./Functions/check.js";
import UserController from "./Controllers/UserController.js";


const Route = express.Router();

Route.post("/api/login", LoginController.validate, LoginController.login);
Route.get("/api/logout", checkLogin, LoginController.logout);

Route.get("/api/user", checkLogin, UserController.index);
Route.post("/api/user", UserController.validate, UserController.store);

export default Route;