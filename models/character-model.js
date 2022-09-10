const { DataTypes } = require("sequelize");


const dataCharacter = {
    img: {
      type: DataTypes.BLOB,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.DECIMAL,
    }
}
module.exports = {
    dataCharacter
}