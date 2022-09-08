const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Character extends Model {}

Character.init(
  {
    img: {
      type: DataTypes.BLOB,
    },
    title: {
      type: DataTypes.STRING,
    },
    qualification: {
      type: DataTypes.ENUM('1','2','3','4','5'),
    }
  },
  {
    sequelize,
    modelName: "character",
    timestamps: false
  }
);

module.exports = {
    Character
}