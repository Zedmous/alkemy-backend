const { DataTypes } = require("sequelize");


const dataMovie = {
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
}

module.exports = {
    dataMovie
}