const { DataTypes } = require("sequelize");

function defineUser(sequelize) {
  return sequelize.define(
    "User",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebookId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Other model options go here
    }
  );
}

module.exports = defineUser;
