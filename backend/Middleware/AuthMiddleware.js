const jwt = require("jsonwebtoken");

module.exports =  function Auth (req,res,next) {
    const token = req.cookies.login;
    const verify = jwt.verify(token,process.env.JWT_TOKEN,((err,decode) => err ? false : decode));
    if(!verify) {
        res.clearCookie("login");
        return res.status(401).json({msg:"dangerToken"});
    };
    req.user = verify;
    return next();
}