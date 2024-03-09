const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect:"sqlite",
    storage:"database/database.sqlite"
})

module.exports = db;

 