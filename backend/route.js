import express from "express";
import LoginController from "./Controllers/LoginController.js";
import { checkLogin } from "./Functions/check.js";
import UserController from "./Controllers/UserController.js";


const Route = express.Router();
const AuthRoute = express.Router().use(checkLogin);

Route.post("/api/login", LoginController.validate,LoginController.login);
Route.post("/api/user", UserController.validate,UserController.store);

AuthRoute.get("/api/logout",LoginController.logout);
AuthRoute.get("/api/user",UserController.index);

export default [Route,AuthRoute];