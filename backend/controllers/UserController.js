import User from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {

    static async login (req,res){
        const body = req.body;
        const admin = await User.findOne();
        return res.json(admin);
    }


}

export default UserController;