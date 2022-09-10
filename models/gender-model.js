const { DataTypes } = require("sequelize");

const dataGender = {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
}
module.exports = {
    dataGender
}