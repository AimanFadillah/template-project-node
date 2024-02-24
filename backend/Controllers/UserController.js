import User from "../Models/User.js";
import { body } from "express-validator"
import bcrypt from "bcrypt";
import checkValidate from "../Functions/checkValidate.js";

const UserController = {

    index: async function (req, res) {
        return res.json({ msg: "success", data: req.user });
    },

    store: [
        body("nama").notEmpty().withMessage("Nama wajib ada"),
        body("email").notEmpty().withMessage("Email wajib ada").isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password wajib ada"),
        checkValidate,
        async function (req, res) {
            try {
                const body = req.body;
                body.password = bcrypt.hashSync(body.password, 10);
                await User.create(body);
                return res.json({ msg: "success" });
            } catch (e) {
                return res.json({ msg: "Email tidak unik" })
            }
        }
    ],
}

export default UserController;

