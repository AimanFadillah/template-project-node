import { DataTypes } from "sequelize";
import db from "../Database/config.js";

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

await User.sync();

export default User;