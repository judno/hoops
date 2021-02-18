require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineUser = require("./User");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || process.env.DATABASE_URL
);

async function createModel() {
  const User = defineUser(sequelize);

  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  await sequelize.sync({ alter: true });

  return {
    User,
  };
}
module.exports = createModel;
