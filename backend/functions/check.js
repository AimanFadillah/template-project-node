import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export function checkLogin (req,res,next) {
    const token = req.cookies.login;
    const verify = jwt.verify(token,process.env.JWT_TOKEN,((err,decode) => err ? false : decode));
    if(!verify) {
        res.clearCookie("login");
        return res.json({msg:"dangerToken"});
    };
    req.user = verify;
    return next();
}

export function checkValidate (req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.json({msg:(errors.array())[0].msg});
    return next()
}