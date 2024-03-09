const { validationResult } = require("express-validator");

module.exports = function checkValidate (req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.json({msg:(errors.array())[0].msg});
    return next()
}

