const User = require("../Models/User.js");
const { body } = require("express-validator")
const bcrypt = require("bcrypt");
const checkValidate = require("../Functions/checkValidate.js");

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
                return res.status(403).json({ msg: "Email tidak unik" })
            }
        }
    ],
}

module.exports = UserController;

