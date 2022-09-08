const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class UserModel extends Model {}

UserModel.init(
  {
    name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false
  }
);

module.exports = UserModel
