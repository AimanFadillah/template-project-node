import express from "express";
import UserController from "./controllers/UserController.js";
import checkValidate from "./functions/checkValidate.js";

const Route = express.Router();

Route.post("/api/login",UserController.validate,checkValidate,UserController.login);


export default Route;