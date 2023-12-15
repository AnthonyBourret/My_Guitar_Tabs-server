const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Style extends Model {};

Style.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    },{
        sequelize,
        tableName: "style",
        modelName: "Style"
});

module.exports = Style;