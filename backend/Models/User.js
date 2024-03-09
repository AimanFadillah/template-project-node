const { DataTypes } = require("sequelize");
const db = require("../Database/config.js");

const User = db.define("user",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
    },
    nama:DataTypes.STRING,
    email:{
        type:DataTypes.STRING,
        unique:true,
    },
    password:DataTypes.STRING,
},{freezeTableName:true})

module.exports = User;