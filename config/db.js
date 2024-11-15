const { Sequelize } = require("sequelize");

console.log(typeof process.env.DATABASE_URL);

const sequelize = new Sequelize("database", "username", "password", {
  host: "your-qovery-host",
  dialect: "postgres",
});

module.exports = sequelize;
