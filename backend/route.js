const express = require("express");
const LoginController = require("./Controllers/LoginController.js");
const UserController = require("./Controllers/UserController.js");
const RouteGroup = require("./Functions/routeGroup.js");
const Auth = require("./Middleware/AuthMiddleware.js");
const db = require("./Database/config.js");

db.sync();

const Route = express.Router();

Route.post("/api/login",LoginController.login);
Route.post("/api/user",UserController.store);

RouteGroup(Route,Auth,(route) => {
    route.get("/api/logout",LoginController.logout);
    route.get("/api/user",UserController.index);
})

module.exports = Route;
