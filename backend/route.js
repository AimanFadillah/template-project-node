import express from "express";
import LoginController from "./Controllers/LoginController.js";
import { checkLogin } from "./Functions/check.js";
import UserController from "./Controllers/UserController.js";
import RouteGroup from "./Functions/routeGroup.js";

const Route = express.Router();

Route.post("/api/login", LoginController.validate,LoginController.login);
Route.post("/api/user", UserController.validate,UserController.store);

RouteGroup(Route,checkLogin,(route) => {
    route.get("/api/logout",LoginController.logout);
    route.get("/api/user",UserController.index);
})

export default Route;
