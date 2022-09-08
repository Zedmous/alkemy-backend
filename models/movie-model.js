const { DataTypes } = require("sequelize");


const dataUser = {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}
module.exports = {
    dataUser
}