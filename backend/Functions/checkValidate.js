const { validationResult } = require("express-validator");

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Next} next 
 * @returns
 */


module.exports = function checkValidate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(403).json({ msg: (errors.array())[0].msg });
    return next()
}

