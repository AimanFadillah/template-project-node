const express = require("express");
const cookieParser = require("cookie-parser");
const Route = require("./route.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const db = require("./Database/config.js");

const app = express();
dotenv.config();

db.sync();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.static(__dirname + "/Public"));
app.use(Route);

app.listen(process.env.APP_PORT, () => console.log(`Server On in http://localhost:${process.env.APP_PORT}/`));