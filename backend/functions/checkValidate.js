import { validationResult } from "express-validator";

export default function checkValidate (req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.json((errors.array())[0].msg);
    return next()
}