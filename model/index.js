require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineHoop = require("./Hoop");
const defineUser = require("./User");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || process.env.DATABASE_URL
);

async function createModel() {
  const User = defineUser(sequelize);
  const Hoop = defineHoop(sequelize);

  Hoop.Owner = Hoop.belongsTo(User, {
    as: "owner",
  });

  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  await sequelize.sync({ alter: true });

  return {
    User,
    Hoop,
  };
}
module.exports = createModel;
