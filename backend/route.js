const express = require("express");
const LoginController = require("./Controllers/LoginController.js");
const UserController = require("./Controllers/UserController.js");
const RouteGroup = require("./Functions/routeGroup.js");
const Auth = require("./Middleware/AuthMiddleware.js");

const Route = express.Router();

Route.post("/login", LoginController.login);
Route.post("/user", UserController.store);

RouteGroup(Route, Auth, (route) => {
    route.get("/logout", LoginController.logout);
    route.get("/user", UserController.index);
})

module.exports = Route;
