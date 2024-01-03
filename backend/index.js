import express from "express";
import cookieParser from "cookie-parser";
import Route from "./route.js";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();  
const port = 5000;

app.use(cookieParser());
app.use(cors());
app.use(express.json()); 
app.use(fileUpload());
app.use(Route);
 
app.listen(port,() => console.log("Server On in http://localhost:5000/"));