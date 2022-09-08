const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Movie extends Model {}

Movie.init(
  {
    img: {
      type: DataTypes.BLOB,
    },
    title: {
      type: DataTypes.STRING,
    },
    year:{
        type:DataTypes.DATE
    },
    qualification: {
      type: DataTypes.ENUM('1','2','3','4','5'),
    }
  },
  {
    sequelize,
    modelName: "movie",
    timestamps: false
  }
);

module.exports = {
    Movie
}