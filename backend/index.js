import express from "express";
import cookieParser from "cookie-parser";
import Route from "./route.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv"

const app = express();  
dotenv.config();

app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use(cookieParser());
app.use(express.json()); 
app.use(fileUpload());
app.use(express.static("Public"));
app.use(Route);
 
app.listen(process.env.APP_PORT,() => console.log(`Server On in http://localhost:${process.env.APP_PORT}/`));