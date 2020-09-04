const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "ankit@1425", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
