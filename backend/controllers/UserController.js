import User from "../models/User.js";
import {body} from "express-validator"
import bcrypt from "bcrypt";

export default class UserController {

    static validate = [
        body("nama").notEmpty().withMessage("Nama wajib ada"),
        body("email").notEmpty().withMessage("Email wajib ada")
                     .isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password wajib ada"),
    ]               

    static async index (req,res) {
        return res.json({msg:"success",data:req.user});
    }

    static async store (req,res) {
        try{
            const body = req.body;
            body.password = bcrypt.hashSync(body.password,10);
            await User.create(body);
            return res.json({msg:"success"} );
        }catch(e){
            return res.json({msg:"Email tidak unik"})
        }
    }
 
}
