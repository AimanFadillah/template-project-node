const User = require("../Models/User.js");
const { body } = require("express-validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkValidate = require("../Functions/checkValidate.js");
const { jam } = require("../Functions/format.js");
const { pesanError, pesanSuccess } = require("../Functions/pesan.js");

const LoginController = {
    login: [
        body("email").notEmpty().withMessage("Email wajib ada").isEmail().withMessage("Email tidak valid"),
        body("password").notEmpty().withMessage("Password wajib ada"),
        checkValidate,
        async function (req, res) {
            const body = req.body;
            const user = await User.findOne({ where: { email: body.email } });

            if (user && bcrypt.compareSync(body.password, user.password)) {
                const payload = user.toJSON(); delete payload.password;
                const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: jam(3) });
                res.cookie("login", token, { httpOnly: true, maxAge: jam(3) });
                return pesanSuccess(res,payload);
            }

            return pesanError(res,"Email atu Password salah");
        }
    ],

    logout: function (req, res) {
        res.clearCookie("login");
        return pesanSuccess(res);
    }
}

module.exports = LoginController

