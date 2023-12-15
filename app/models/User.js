const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    mail: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    },{
        sequelize,
        tableName: "user",
        modelName: "User"
});

module.exports = User;