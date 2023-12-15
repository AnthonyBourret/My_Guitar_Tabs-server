const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Tuning extends Model {};

Tuning.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    strings: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    },{
        sequelize,
        tableName: "tuning",
        modelName: "Tuning"
});

module.exports = Tuning;