import express from "express";
import UserController from "./controllers/UserController.js";

const Route = express.Router();

Route.post("/api/login",UserController.login);


export default Route;