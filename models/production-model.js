const { DataTypes } = require("sequelize");
const dataProduction = {
  characterId: {
    type: DataTypes.INTEGER,
    references: {
      //model: character, // 'Characters' would also work
      key: 'id'
    }
  },
  movieId: {
    type: DataTypes.INTEGER,
    references: {
      //model: movie, // 'Movies' would also work
      key: 'id'
    }
  }
}
module.exports = {
  dataProduction
}


