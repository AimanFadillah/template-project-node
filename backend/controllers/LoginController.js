import User from "../models/User.js";
import { body } from "express-validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { checkValidate} from "../functions/check.js";

export default class LoginController {

    static validate = [
        body("email").notEmpty().withMessage("Email wajib ada")
            .isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password wajib ada"),
        checkValidate,
    ];

    static jam(jam = 1) {
        return `${1000 * 60 * 60 * jam}`;
    }

    static async login(req, res) {
        const body = req.body;
        const user = await User.findOne({ where: { email: body.email } });

        if (user && bcrypt.compareSync(body.password, user.password)) {
            const payload = user.toJSON();delete payload.password;
            const token = jwt.sign(payload,process.env.JWT_TOKEN,{ expiresIn: LoginController.jam(3) });
            res.cookie("login", token, { httpOnly: true, maxAge: LoginController.jam(3)});
            return res.json({msg: "success",data: payload});
        }

        return res.json({ msg: "Email atau password Salah" });
    }

    static logout(req, res) {
        res.clearCookie("login");
        return res.json({ msg: "success" });
    }

}
