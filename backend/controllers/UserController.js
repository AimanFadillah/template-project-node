import User from "../models/User.js";
import {body} from "express-validator"
import bcrypt from "bcrypt";

class UserController {
    static validate = [
        body("nama").notEmpty().withMessage("Nama wajib ada"),
        body("password").notEmpty().withMessage("Password wajib ada"),
    ];

    static async login (req,res){
        const body = req.body;
        const admin = await User.findOne();

        if(body.nama === admin.nama && bcrypt.compareSync(body.password,admin.password)){
            
            return res.json(admin)
        }

        return res.json("Nama atau password Salah");
    }


}

export default UserController;