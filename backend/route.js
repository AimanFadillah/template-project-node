import express from "express";
import LoginController from "./Controllers/LoginController.js";
import UserController from "./Controllers/UserController.js";
import RouteGroup from "./Functions/routeGroup.js";
import Auth from "./Middleware/AuthMiddleware.js";

const Route = express.Router();

Route.post("/api/login",LoginController.login);
Route.post("/api/user",UserController.store);

RouteGroup(Route,Auth,(route) => {
    route.get("/api/logout",LoginController.logout);
    route.get("/api/user",UserController.index);
})

export default Route;
