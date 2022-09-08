const Sequelize = require("sequelize");
const dbConection = new Sequelize("moviesDB", "ejnsilva", "8565203", {
  dialect: "sqlite",
  host: "./database/dev.sqlite",
});

module.exports = dbConection;